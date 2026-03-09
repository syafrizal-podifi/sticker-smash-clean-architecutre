/**
 * View: renders UI and calls ViewModel actions. No business logic; only binding to the store.
 * In Swift: UIViewController or SwiftUI View observing ViewModel.
 */
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';

import { useSettingStore } from './_settingStore';

export default function SettingScreen() {
  const { darkMode, setDarkMode } = useSettingStore();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.row}>
          <Text style={styles.label}>Dark mode</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#3a3a3c', true: '#34c759' }}
            thumbColor="#fff"
          />
        </View>
        <Pressable
          style={styles.row}
          onPress={() => router.push('/notifications-settings')}
          android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
        >
          <Text style={styles.label}>Notifications Settings</Text>
          <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
        </Pressable>
        <Pressable
          style={[styles.row, styles.rowLast]}
          onPress={() => router.push('/help-feedback')}
          android_ripple={{ color: 'rgba(255,255,255,0.1)' }}
        >
          <Text style={styles.label}>Help and Feedback</Text>
          <Ionicons name="chevron-forward" size={20} color="#8e8e93" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  group: {
    backgroundColor: '#1c1c1e',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#38383a',
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  label: {
    color: '#fff',
    fontSize: 17,
  },
});
