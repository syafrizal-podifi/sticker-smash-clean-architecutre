/**
 * Domain contract for the pick-image use case. Use in app with real impl, in tests with a mock.
 */
import type { PickImageResult } from '@/domain/repositories/IImagePickerRepository';

export interface IPickImageUseCase {
  execute(): Promise<PickImageResult | null>;
}
