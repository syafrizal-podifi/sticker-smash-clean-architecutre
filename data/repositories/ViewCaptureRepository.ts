/**
 * Data layer: wraps react-native-view-shot for capturing a view as image URI.
 * Implements domain IViewCaptureRepository for easy mocking in tests.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

import type { IViewCaptureRepository } from '@/domain/repositories/IViewCaptureRepository';

export const viewCaptureRepository: IViewCaptureRepository = {
  async captureToUri(ref, options = {}) {
    const node = ref.current;
    if (!node) throw new Error('View ref not mounted');
    return captureRef(node, {
      height: options.height ?? 440,
      quality: options.quality ?? 1,
    });
  },
};
