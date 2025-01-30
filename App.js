
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import Pantalla from './Pantalla';  // Ensure you're using the capitalized name

export default function App() {
  return (  
    <View style={styles.container}>
      <Pantalla />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 0,
    flex: 1,
    backgroundColor: '#E2E0C8',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
