/**
 * Domain contract for capturing a view as an image URI. Implement in data layer for easy mocking.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';

export interface IViewCaptureRepository {
  captureToUri(
    ref: RefObject<View | null>,
    options?: { height?: number; quality?: number }
  ): Promise<string>;
}
