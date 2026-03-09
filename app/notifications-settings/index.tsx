/**
 * View: renders UI and binds to the store. No business logic.
 */
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useNotificationsSettingsStore } from './_notificationsSettingsStore';

export default function NotificationsSettingsScreen() {
  useNotificationsSettingsStore();

  return (
    <>
      <Stack.Screen options={{ title: 'Notifications Settings' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Notifications Settings</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 17,
  },
});
