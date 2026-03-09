/**
 * Domain layer: single responsibility for picking an image from the library.
 * In Swift: UseCase protocol/struct with execute(), injected with Repository.
 */
import { imagePickerRepository, PickImageResult } from '@/data/repositories/ImagePickerRepository';

export const pickImageUseCase = {
  async execute(): Promise<PickImageResult | null> {
    return imagePickerRepository.pickImage();
  },
};
