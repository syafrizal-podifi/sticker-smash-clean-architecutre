/**
 * Domain contract for the save-image use case. Use in app with real impl, in tests with a mock.
 */
import type { RefObject } from 'react';
import type { View } from 'react-native';

export interface ISaveImageUseCase {
  execute(ref: RefObject<View | null>): Promise<void>;
}
