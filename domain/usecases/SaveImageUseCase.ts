/**
 * Domain layer: captures a view as image and saves to the photo library.
 * Depends on IViewCaptureRepository and IMediaLibraryRepository so you can inject mocks in tests.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';

import type { IMediaLibraryRepository } from '@/domain/repositories/IMediaLibraryRepository';
import type { IViewCaptureRepository } from '@/domain/repositories/IViewCaptureRepository';
import type { ISaveImageUseCase } from '@/domain/usecases/ISaveImageUseCase';

import { mediaLibraryRepository } from '@/data/repositories/MediaLibraryRepository';
import { viewCaptureRepository } from '@/data/repositories/ViewCaptureRepository';

export type { ISaveImageUseCase };

const CAPTURE_HEIGHT = 440;
const CAPTURE_QUALITY = 1;

export function createSaveImageUseCase(
  viewCapture: IViewCaptureRepository = viewCaptureRepository,
  mediaLibrary: IMediaLibraryRepository = mediaLibraryRepository
): ISaveImageUseCase {
  return {
    async execute(ref: RefObject<View | null>) {
      const uri = await viewCapture.captureToUri(ref, {
        height: CAPTURE_HEIGHT,
        quality: CAPTURE_QUALITY,
      });
      await mediaLibrary.saveToLibraryAsync(uri);
    },
  };
}

export const saveImageUseCase = createSaveImageUseCase();
