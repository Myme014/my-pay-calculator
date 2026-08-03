import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TaskScreen() {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [estimatedHours, setEstimatedHours] = useState('');

  const handleAddTask = () => {
    if (!taskName || !dueDate || !estimatedHours) {
      Alert.alert('入力エラー', 'すべての項目を入力してください！');
      return;
    }

    Alert.alert(
      'タスクを追加しました！',
      `課題: ${taskName}\n締切: ${dueDate}\n予想時間: ${estimatedHours}時間`
    );

    // 入力欄をクリア
    setTaskName('');
    setDueDate('');
    setEstimatedHours('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>新しいタスクを追加</Text>

      {/* 課題名入力 */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>課題・タスク名</Text>
        <TextInput
          style={styles.input}
          placeholder="例: アルゴリズムレポート"
          placeholderTextColor="#aaa"
          value={taskName}
          onChangeText={setTaskName}
        />
      </View>

      {/* 締切日時入力 */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>締切日時</Text>
        <TextInput
          style={styles.input}
          placeholder="例: 2026-08-10 23:59"
          placeholderTextColor="#aaa"
          value={dueDate}
          onChangeText={setDueDate}
        />
      </View>

      {/* 予想所要時間 */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>予想所要時間 (時間)</Text>
        <TextInput
          style={styles.input}
          placeholder="例: 3"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={estimatedHours}
          onChangeText={setEstimatedHours}
        />
      </View>

      {/* 追加ボタン */}
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>タスクを登録する</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'NotoSansJP-Bold',
    marginBottom: 20,
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'NotoSansJP-Medium',
    marginBottom: 6,
    color: '#555',
  },
  input: {

    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    fontFamily: 'NotoSansJP-Medium',
  },
  button: {
    backgroundColor: '#7F66FF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold',
  },
});