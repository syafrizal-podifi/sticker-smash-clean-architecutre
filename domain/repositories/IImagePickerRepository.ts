/**
 * Domain contract for picking an image. Implement in data layer for easy mocking.
 */
export type PickImageResult = { uri: string };

export interface IImagePickerRepository {
  pickImage(): Promise<PickImageResult | null>;
}
