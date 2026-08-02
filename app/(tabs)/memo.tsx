import { StyleSheet, Text, View } from 'react-native';

export default function MemoScreen() {
  return (
    <View style={styles.container}>
      <Text>Memo Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 