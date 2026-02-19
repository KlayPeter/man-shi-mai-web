import { create } from 'zustand';

interface UIState {
  showAuthModal: boolean;
  authPromptOpen: boolean;
  authRedirectPath: string;
  setShowAuthModal: (show: boolean) => void;
  showAuthPrompt: (redirectPath?: string) => void;
  hideAuthPrompt: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  showAuthModal: false,
  authPromptOpen: false,
  authRedirectPath: '/',
  setShowAuthModal: (show: boolean) => set({ showAuthModal: show }),
  showAuthPrompt: (redirectPath = '/') => set({ authPromptOpen: true, authRedirectPath: redirectPath }),
  hideAuthPrompt: () => set({ authPromptOpen: false }),
}));
