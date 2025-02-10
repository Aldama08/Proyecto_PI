
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { styles } from './styles';
import Pantalla from './Pantalla';  // Ensure you're using the capitalized name

export default function App() {
  return (  
    <View style={styles.container}>
      <Pantalla />
      <StatusBar style="light" />
    </View>
  );
}


