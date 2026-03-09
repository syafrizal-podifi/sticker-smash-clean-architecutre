/**
 * Data layer: wraps Expo Media Library for saving to the photo library.
 * Implements domain IMediaLibraryRepository for easy mocking in tests.
 */
import * as MediaLibrary from 'expo-media-library';

import type { IMediaLibraryRepository } from '@/domain/repositories/IMediaLibraryRepository';

export type { IMediaLibraryRepository };

const mediaLibraryRepositoryImpl: IMediaLibraryRepository = {
  async saveToLibraryAsync(uri: string): Promise<void> {
    await MediaLibrary.saveToLibraryAsync(uri);
  },
};

export const mediaLibraryRepository = mediaLibraryRepositoryImpl;
