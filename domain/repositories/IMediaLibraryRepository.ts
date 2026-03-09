/**
 * Domain contract for saving to the photo library. Implement in data layer for easy mocking.
 */
export interface IMediaLibraryRepository {
  saveToLibraryAsync(uri: string): Promise<void>;
}
