/**
 * ViewModel: minimal store for Notifications Settings (pattern consistency).
 * useNotificationsSettingsStore() in the View is like @StateObject / @ObservedObject.
 */
import { create } from 'zustand';

type NotificationsSettingsState = Record<string, never>;
type NotificationsSettingsActions = Record<string, never>;

export const useNotificationsSettingsStore = create<
  NotificationsSettingsState & NotificationsSettingsActions
>(() => ({}));
