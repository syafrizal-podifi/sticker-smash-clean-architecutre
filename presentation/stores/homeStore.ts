/**
 * ViewModel: state + actions that call use cases and update state.
 * In Swift: ObservableObject / ViewModel class with @Published properties and methods.
 * useHomeStore() in the View is like @StateObject / @ObservedObject.
 */
import type { ImageSourcePropType } from 'react-native';
import type { RefObject } from 'react';
import type { View } from 'react-native';
import { create } from 'zustand';

import { pickImageUseCase } from '@/domain/usecases/PickImageUseCase';
import { saveImageUseCase } from '@/domain/usecases/SaveImageUseCase';

type HomeState = {
  selectedImage: string | undefined;
  showAppOptions: boolean;
  isModalVisible: boolean;
  pickedEmoji: ImageSourcePropType | undefined;
};

type HomeActions = {
  pickImage: () => Promise<void>;
  setShowAppOptions: (show: boolean) => void;
  onAddSticker: () => void;
  onModalClose: () => void;
  setPickedEmoji: (emoji: ImageSourcePropType | undefined) => void;
  onReset: () => void;
  saveImage: (ref: RefObject<View | null>) => Promise<void>;
};

export const useHomeStore = create<HomeState & HomeActions>((set) => ({
  // State (Swift: @Published; when these change, View re-renders)
  selectedImage: undefined,
  showAppOptions: false,
  isModalVisible: false,
  pickedEmoji: undefined,

  setShowAppOptions: (show) => set({ showAppOptions: show }),
  onAddSticker: () => set({ isModalVisible: true }),
  onModalClose: () => set({ isModalVisible: false }),
  setPickedEmoji: (emoji) => set({ pickedEmoji: emoji }),
  onReset: () => set({ showAppOptions: false }),

  pickImage: async () => {
    const result = await pickImageUseCase.execute();
    if (result) {
      set({ selectedImage: result.uri, showAppOptions: true });
    } else {
      alert('You did not select any image.');
    }
  },

  saveImage: async (ref) => {
    try {
      await saveImageUseCase.execute(ref);
      alert('Saved!');
    } catch (e) {
      console.log(e);
    }
  },
}));
