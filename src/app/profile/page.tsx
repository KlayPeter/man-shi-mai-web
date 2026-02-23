'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { useUserStore } from '@/stores/userStore'
import request from '@/lib/request'
import EditProfileModal from '@/components/profile/EditProfileModal'
import UploadResumeModal from '@/components/profile/UploadResumeModal'
import RedeemServiceModal from '@/components/profile/RedeemServiceModal'
import RechargeModal from '@/components/profile/RechargeModal'

const MAX_RESUME_COUNT = 5

function formatDate(date: string) {
  if (!date) return ''
  return new Date(date).toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
}

export default function ProfilePage() {
  const userStore = useUserStore()
  const [activeRecordTab, setActiveRecordTab] = useState<'recharge' | 'consumption'>('recharge')
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [showRedeem, setShowRedeem] = useState(false)
  const [showRecharge, setShowRecharge] = useState(false)
  const [rechargeRecords, setRechargeRecords] = useState<any[]>([])
  const [consumeRecords, setConsumeRecords] = useState<any[]>([])
  const [recordsLoading, setRecordsLoading] = useState(false)
  const [previewResume, setPreviewResume] = useState<any>(null)
  const [deleteConfirm, setDeleteConfirm] = useState<any>(null)
  const [editNameModal, setEditNameModal] = useState<{ resume: any; index: number } | null>(null)
  const [editNameValue, setEditNameValue] = useState('')
  const [editNameLoading, setEditNameLoading] = useState(false)

  const fetchRecords = useCallback(async (tab: 'recharge' | 'consumption') => {
    setRecordsLoading(true)
    try {
      const endpoint = tab === 'recharge' ? '/user/transactions' : '/user/consumption-records'
      const data: any = await request.get(endpoint)
      if (tab === 'recharge') setRechargeRecords(Array.isArray(data) ? data : (data?.records || data?.list || []))
      else setConsumeRecords(Array.isArray(data) ? data : (data?.records || data?.list || []))
    } catch { /* ignore */ }
    finally { setRecordsLoading(false) }
  }, [])

  const fetchResumes = useCallback(async () => {
    try {
      const data: any = await request.get('/resume/getInterviewResumeList')
      userStore.updateResumes(Array.isArray(data) ? data : (data?.list || []))
    } catch { /* ignore */ }
  }, [userStore])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchResumes() }, [])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchRecords(activeRecordTab) }, [activeRecordTab])

  const handleDeleteResume = async () => {
    if (!deleteConfirm) return
    try {
      await request.post('/resume/deleteResume', { resumeId: deleteConfirm.resume.resumeId })
      const newResumes = [...userStore.resumes]
      newResumes.splice(deleteConfirm.index, 1)
      userStore.updateResumes(newResumes)
    } catch { /* ignore */ }
    finally { setDeleteConfirm(null) }
  }

  const handleConfirmEditName = async () => {
    if (!editNameModal) return
    const value = editNameValue.trim()
    if (!value || value.length > 10) return
    setEditNameLoading(true)
    try {
      await request.post('/resume/updateResumeName', { resumeId: editNameModal.resume.resumeId, resumeName: value })
      const newResumes = [...userStore.resumes]
      newResumes[editNameModal.index] = { ...newResumes[editNameModal.index], resumeName: value }
      userStore.updateResumes(newResumes)
      setEditNameModal(null)
    } catch { /* ignore */ }
    finally { setEditNameLoading(false) }
  }

  const stats = [
    { label: '面试押题', value: (userStore.userInfo as any)?.resumeRemainingCount || 0, icon: 'i-heroicons-document-text' },
    { label: '专项面试', value: (userStore.userInfo as any)?.specialRemainingCount || 0, icon: 'i-heroicons-bolt' },
    { label: '行测+HR', value: (userStore.userInfo as any)?.behaviorRemainingCount || 0, icon: 'i-heroicons-user-group' }
  ]

  const currentRecords = activeRecordTab === 'recharge' ? rechargeRecords : consumeRecords

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8">
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">个人信息</h2>
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="p-1 bg-white rounded-full shadow-sm ring-1 ring-gray-100">
                      {userStore.userInfo?.avatar ? (
                        <Image src={userStore.userInfo.avatar} alt="头像" width={96} height={96} className="w-24 h-24 rounded-full object-cover" />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-3xl font-bold">
                          {userStore.userInfo?.username?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{userStore.userInfo?.username || '未设置昵称'}</h3>
                  <div className="px-3 py-1 rounded-md bg-gray-100 text-xs text-gray-500 font-mono mb-4">
                    ID: {(userStore.userInfo as any)?._id || '-'}
                  </div>
                  <Button color="gray" variant="solid" className="w-full" onClick={() => setShowEditProfile(true)}>
                    <Icon name="i-heroicons-pencil-square" className="w-4 h-4 mr-2" />
                    编辑资料
                  </Button>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 blur-2xl rounded-full pointer-events-none" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="i-heroicons-currency-dollar" className="w-5 h-5" />
                        <p className="text-base font-semibold">账户总览</p>
                      </div>
                      <div className="mb-4">
                        <p className="text-xs opacity-80">当前可用小麦币余额</p>
                        <p className="text-3xl font-bold tracking-tight mt-1">
                          {(userStore.userInfo?.maiCoinBalance ?? 0).toFixed(2)}
                        </p>
                        <p className="text-xs opacity-70 mt-2">
                          <span className="text-yellow-200 font-bold">20 小麦币兑换一次</span> 面试押题 / 专项面试 / 行测+HR
                        </p>
                      </div>
                      <div className="space-y-3 mb-4">
                        {stats.map((stat, idx) => (
                          <div key={idx} className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                                <Icon name={stat.icon} className="w-5 h-5" />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{stat.label}</p>
                                <p className="text-xs opacity-70">剩余次数</p>
                              </div>
                            </div>
                            <p className="text-2xl font-semibold">
                              {stat.value}<span className="text-xs font-normal opacity-70 ml-1">次</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button onClick={() => setShowRedeem(true)}
                          className="flex-1 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium flex items-center justify-center gap-1.5 transition-colors shadow-lg">
                          <Icon name="i-heroicons-sparkles" className="w-4 h-4" />
                          小麦币兑换
                        </button>
                        <button onClick={() => setShowRecharge(true)}
                          className="flex-1 py-2.5 rounded-xl border border-white/30 bg-white/5 hover:bg-white/15 text-white text-sm font-medium flex items-center justify-center gap-1.5 transition-colors">
                          <Icon name="i-heroicons-credit-card" className="w-4 h-4" />
                          优惠充值
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Icon name="i-heroicons-folder" className="w-5 h-5 text-primary-600" />
                    <h2 className="text-base font-semibold text-gray-900">我的简历</h2>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {userStore.resumes.length}/{MAX_RESUME_COUNT}
                    </span>
                  </div>
                  {userStore.canAddResume ? (
                    <Button color="primary" onClick={() => setShowUploadResume(true)}>
                      <Icon name="i-heroicons-plus" className="w-4 h-4 mr-1" />
                      上传简历
                    </Button>
                  ) : (
                    <span className="text-sm text-gray-500">最多上传 {MAX_RESUME_COUNT} 份简历</span>
                  )}
                </div>
                {userStore.resumes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {userStore.resumes.map((resume: any, index: number) => (
                      <div
                        key={resume.resumeId || resume.id || index}
                        className="group relative flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => setPreviewResume(resume)}
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shrink-0">
                          <Icon name="i-heroicons-document-text" className="w-7 h-7 text-primary-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate text-sm mb-1">{resume.resumeName || resume.filename || '我的简历'}</p>
                          <p className="text-xs text-gray-400">{formatDate(resume.createTime || resume.createdAt)}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={e => e.stopPropagation()}>
                          <button onClick={() => { setEditNameModal({ resume, index }); setEditNameValue(resume.resumeName || '') }}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
                            <Icon name="i-heroicons-pencil" className="w-4 h-4" />
                          </button>
                          <button onClick={() => setPreviewResume(resume)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
                            <Icon name="i-heroicons-eye" className="w-4 h-4" />
                          </button>
                          <button onClick={() => setDeleteConfirm({ resume, index })}
                            className="p-2 rounded-lg hover:bg-red-50 transition-colors text-red-500">
                            <Icon name="i-heroicons-trash" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="i-heroicons-document-text" className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">暂无简历</p>
                    <Button color="primary" onClick={() => setShowUploadResume(true)}>上传第一份简历</Button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="i-heroicons-chart-bar" className="w-5 h-5 text-primary-600" />
                    <h2 className="text-base font-semibold text-gray-900">消费与充值记录</h2>
                  </div>
                  <div className="flex gap-2 p-1 bg-gray-100 rounded-full">
                    {(['recharge', 'consumption'] as const).map(tab => (
                      <button key={tab} onClick={() => setActiveRecordTab(tab)}
                        className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${activeRecordTab === tab ? 'bg-primary-600 text-white shadow-sm' : 'text-gray-500 hover:text-primary-600'}`}>
                        {tab === 'recharge' ? '充值记录' : '消费记录'}
                      </button>
                    ))}
                  </div>
                </div>
                {recordsLoading ? (
                  <div className="text-center py-12">
                    <Icon name="i-heroicons-arrow-path" className="w-8 h-8 text-gray-300 mx-auto mb-2 animate-spin" />
                    <p className="text-gray-400 text-sm">加载中...</p>
                  </div>
                ) : currentRecords.length > 0 ? (
                  <div className="space-y-3">
                    {currentRecords.map((record: any, i: number) => (
                      <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeRecordTab === 'recharge' ? 'bg-green-100' : 'bg-orange-100'}`}>
                            <Icon name={activeRecordTab === 'recharge' ? 'i-heroicons-arrow-down' : 'i-heroicons-arrow-up'}
                              className={`w-5 h-5 ${activeRecordTab === 'recharge' ? 'text-green-600' : 'text-orange-600'}`} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{record.description || record.planName || (activeRecordTab === 'recharge' ? '充值' : '消费')}</p>
                            <p className="text-xs text-gray-400">{formatDate(record.createdAt)}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-semibold ${activeRecordTab === 'recharge' ? 'text-green-600' : 'text-orange-600'}`}>
                            {activeRecordTab === 'recharge' ? '+' : '-'}{record.amount || record.coins} 小麦币
                          </p>
                          {record.price && <p className="text-xs text-gray-400">{record.price}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Icon name="i-heroicons-clipboard-document-list" className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">暂无{activeRecordTab === 'recharge' ? '充值' : '消费'}记录</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal open={showEditProfile} onClose={() => setShowEditProfile(false)} />
      <UploadResumeModal open={showUploadResume} onClose={() => setShowUploadResume(false)} onUploaded={fetchResumes} />
      <RedeemServiceModal
        open={showRedeem}
        onClose={() => setShowRedeem(false)}
        onRedeemSuccess={(serviceType) => { alert(`兑换成功：${serviceType}`); fetchResumes() }}
        onGoToRecharge={() => { setShowRedeem(false); setShowRecharge(true) }}
      />
      <RechargeModal open={showRecharge} onClose={() => setShowRecharge(false)} onRecharged={fetchResumes} />

      {previewResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setPreviewResume(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <span className="font-semibold text-gray-900 truncate">{previewResume.resumeName || '简历预览'}</span>
              <button onClick={() => setPreviewResume(null)} className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
                <Icon name="i-heroicons-x-mark" className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden m-4 border rounded-lg">
              {previewResume.resumeUrl ? (
                <iframe src={previewResume.resumeUrl} className="w-full h-[600px]" />
              ) : (
                <div className="p-12 text-center text-gray-500">
                  <Icon name="i-heroicons-document-text" className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>无法预览此文件</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setDeleteConfirm(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">确认删除</h3>
            <p className="text-gray-600 text-sm mb-6">确定要删除这份简历吗？删除后无法恢复。</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm">取消</button>
              <button onClick={handleDeleteResume}
                className="flex-1 py-2.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium">确定删除</button>
            </div>
          </div>
        </div>
      )}

      {editNameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setEditNameModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">修改简历名称</h3>
            <input
              type="text"
              value={editNameValue}
              onChange={e => setEditNameValue(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleConfirmEditName()}
              placeholder="请输入新的简历名称"
              maxLength={10}
              autoFocus
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition text-sm mb-2"
            />
            <p className="text-xs text-gray-400 mb-4">不超过 10 个字符，便于快速识别</p>
            <div className="flex gap-3">
              <button onClick={() => setEditNameModal(null)} disabled={editNameLoading}
                className="flex-1 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm disabled:opacity-50">取消</button>
              <button onClick={handleConfirmEditName} disabled={editNameLoading}
                className="flex-1 py-2.5 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors text-sm font-medium disabled:opacity-60">
                {editNameLoading ? '保存中...' : '保存'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}