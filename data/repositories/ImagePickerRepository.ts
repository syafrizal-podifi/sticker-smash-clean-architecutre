/**
 * Data layer: wraps Expo/OS APIs for picking images.
 * In Swift: Repository protocol (e.g. ImagePickerRepositoryProtocol) + implementation
 * that uses UIImagePickerController or PHPicker.
 */
import * as ImagePicker from 'expo-image-picker';

export type PickImageResult = { uri: string };

export const imagePickerRepository = {
  async pickImage(): Promise<PickImageResult | null> {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (result.canceled) {
      return null;
    }
    return { uri: result.assets[0].uri };
  },
};
