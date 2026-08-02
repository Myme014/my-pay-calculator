import { StyleSheet, Text, View } from 'react-native';
type HeaderProps = {
    title: string;
}

export default function Header({ title }: HeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    height: 100,               // ノッチ（画面上のカメラ部分）を考慮した高さ
    backgroundColor: '#E2DEFC', // Figmaで決めた薄紫色
    justifyContent: 'center',  // 上下中央
    alignItems: 'center',      // 左右中央
    paddingTop: 40,            // ノッチと被らないように上に隙間を作る
  },
  headerTitle: {
    color: '#000000',          // 文字色（黒）
    fontSize: 20,             // 文字サイズ
    fontWeight: 'bold',       // 太字
  },
});