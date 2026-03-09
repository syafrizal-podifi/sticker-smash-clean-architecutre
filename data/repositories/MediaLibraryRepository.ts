/**
 * Data layer: wraps Expo Media Library for saving to the photo library.
 * Only save; permission is handled in the View via MediaLibrary.usePermissions() hook.
 * In Swift: Repository protocol + implementation using PHPhotoLibrary.shared().performChanges to save.
 */
import * as MediaLibrary from 'expo-media-library';

export const mediaLibraryRepository = {
  async saveToLibraryAsync(uri: string): Promise<void> {
    await MediaLibrary.saveToLibraryAsync(uri);
  },
};
