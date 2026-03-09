/**
 * ViewModel: state + actions for Settings.
 * In Swift: ObservableObject / ViewModel class with @Published properties and methods.
 * useSettingStore() in the View is like @StateObject / @ObservedObject.
 */
import { create } from 'zustand';

type SettingState = {
  darkMode: boolean;
};

type SettingActions = {
  setDarkMode: (value: boolean) => void;
};

export const useSettingStore = create<SettingState & SettingActions>((set) => ({
  darkMode: false,

  setDarkMode: (value) => set({ darkMode: value }),
}));
