/**
 * Domain layer: captures a view as image and saves to the photo library.
 * Depends on IMediaLibraryRepository so you can inject a mock in tests.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import type { IMediaLibraryRepository } from '@/domain/repositories/IMediaLibraryRepository';
import type { ISaveImageUseCase } from '@/domain/usecases/ISaveImageUseCase';

import { mediaLibraryRepository } from '@/data/repositories/MediaLibraryRepository';

const CAPTURE_HEIGHT = 440;
const CAPTURE_QUALITY = 1;

export type { ISaveImageUseCase };

export function createSaveImageUseCase(
  repo: IMediaLibraryRepository = mediaLibraryRepository
): ISaveImageUseCase {
  return {
    async execute(ref: RefObject<View | null>) {
      const node = ref.current;
      if (!node) return;

      const localUri = await captureRef(node, {
        height: CAPTURE_HEIGHT,
        quality: CAPTURE_QUALITY,
      });

      await repo.saveToLibraryAsync(localUri);
    },
  };
}

export const saveImageUseCase = createSaveImageUseCase();
