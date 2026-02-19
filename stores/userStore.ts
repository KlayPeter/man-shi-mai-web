import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserInfo {
  id?: string;
  username?: string;
  email?: string;
  avatar?: string;
  [key: string]: any;
}

interface UserState {
  isLogin: boolean;
  token: string | null;
  userInfo: UserInfo | null;
  setToken: (token: string) => void;
  setUserInfo: (userInfo: UserInfo) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isLogin: false,
      token: null,
      userInfo: null,
      setToken: (token: string) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
        }
        set({ token, isLogin: true });
      },
      setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
      logout: () => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        set({ isLogin: false, token: null, userInfo: null });
      },
    }),
    {
      name: 'user-storage',
    }
  )
);
