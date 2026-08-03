import { StyleSheet, Text, View } from 'react-native';

export default function ShiftScreen() {
  return (
    <View style={styles.container}>
      <Text>Shift Screen</Text>
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