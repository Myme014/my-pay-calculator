import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import Header from '../components/header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        header: ({ options }) => <Header title={options.title ?? ''} />,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          tabBarLabel: 'ホーム',    
        }}
      />
      <Tabs.Screen
        name="memo"
        options={{
          title: 'メモ',
          tabBarLabel: 'メモ',
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: '設定',
          tabBarLabel: '設定',
        }}
      />
    </Tabs>
  );
}
