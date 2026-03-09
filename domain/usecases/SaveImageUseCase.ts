/**
 * Domain layer: captures a view as image and saves to the photo library.
 * In Swift: use case that takes a snapshotter dependency and a save dependency;
 * here we take ref + repo because captureRef is RN-specific.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import { mediaLibraryRepository } from '@/data/repositories/MediaLibraryRepository';

const CAPTURE_HEIGHT = 440;
const CAPTURE_QUALITY = 1;

export const saveImageUseCase = {
  async execute(ref: RefObject<View | null>): Promise<void> {
    const node = ref.current;
    if (!node) return;

    const localUri = await captureRef(node, {
      height: CAPTURE_HEIGHT,
      quality: CAPTURE_QUALITY,
    });

    await mediaLibraryRepository.saveToLibraryAsync(localUri);
  },
};
