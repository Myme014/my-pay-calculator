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
    height: 100,               
    backgroundColor: '#AEB3FF', 
    justifyContent: 'flex-start',  
    alignItems: 'flex-start',      
    paddingTop: 30,
    paddingLeft: 30,
  
  },
  headerTitle: {
    color: '#ffffff',          
    fontSize: 30,             
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.25)', // 影の色（薄い黒）
    textShadowOffset: { width: 1, height: 2 }, // 右に1px、下に2pxずらす
    textShadowRadius: 4,      
  },    
});