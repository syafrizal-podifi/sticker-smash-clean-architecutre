/**
 * ViewModel: minimal store for Help and Feedback (pattern consistency).
 * useHelpFeedbackStore() in the View is like @StateObject / @ObservedObject.
 */
import { create } from 'zustand';

type HelpFeedbackState = Record<string, never>;
type HelpFeedbackActions = Record<string, never>;

export const useHelpFeedbackStore = create<HelpFeedbackState & HelpFeedbackActions>(
  () => ({})
);
