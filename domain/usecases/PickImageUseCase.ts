/**
 * Domain layer: single responsibility for picking an image from the library.
 * Depends on IImagePickerRepository so you can inject a mock in tests.
 */
import type { IImagePickerRepository } from '@/domain/repositories/IImagePickerRepository';
import type { IPickImageUseCase } from '@/domain/usecases/IPickImageUseCase';

import { imagePickerRepository } from '@/data/repositories/ImagePickerRepository';

export type { IPickImageUseCase };

export function createPickImageUseCase(
  repo: IImagePickerRepository = imagePickerRepository
): IPickImageUseCase {
  return {
    async execute() {
      return repo.pickImage();
    },
  };
}

export const pickImageUseCase = createPickImageUseCase();
