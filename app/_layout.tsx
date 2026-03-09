import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="notifications-settings/index"
          options={{
            title: 'Notifications Settings',
            headerStyle: { backgroundColor: '#25292e' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="help-feedback/index"
          options={{
            title: 'Help and Feedback',
            headerStyle: { backgroundColor: '#25292e' },
            headerTintColor: '#fff',
          }}
        />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
