/**
 * View: renders UI and binds to the store. No business logic.
 */
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { useHelpFeedbackStore } from './_helpFeedbackStore';

export default function HelpFeedbackScreen() {
  useHelpFeedbackStore();

  return (
    <>
      <Stack.Screen options={{ title: 'Help and Feedback' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Help and Feedback</Text>
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
