/**
 * View: renders UI and calls ViewModel actions. No business logic; only binding to the store.
 * In Swift: UIViewController or SwiftUI View observing ViewModel.
 * Permission is handled at the view edge (hook), like iOS handling it in the VC.
 */
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
import EmojiSticker from '@/components/EmojiSticker';
import { useHomeStore } from '@/presentation/stores/homeStore';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function HomeScreen() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef<View>(null);

  const {
    selectedImage,
    showAppOptions,
    isModalVisible,
    pickedEmoji,
    pickImage,
    setShowAppOptions,
    onAddSticker,
    onModalClose,
    setPickedEmoji,
    onReset,
    saveImage,
  } = useHomeStore();

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, [permissionResponse?.granted, requestPermission]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
          {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={() => saveImage(imageRef)} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImage} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
