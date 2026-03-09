/**
 * Data layer: wraps Expo/OS APIs for picking images.
 * Implements domain IImagePickerRepository for easy mocking in tests.
 */
import * as ImagePicker from 'expo-image-picker';

import type { IImagePickerRepository, PickImageResult } from '@/domain/repositories/IImagePickerRepository';

export type { IImagePickerRepository, PickImageResult };

const imagePickerRepositoryImpl: IImagePickerRepository = {
  async pickImage(): Promise<PickImageResult | null> {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      return null;
    }
    return { uri: result.assets[0].uri };
  },
};

export const imagePickerRepository = imagePickerRepositoryImpl;
