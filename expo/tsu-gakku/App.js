import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require('./assets/imag/check-circle.png')} />
      <StatusBar style="auto" />
      <View style={tw`bg-white dark:bg-black`}>
        <Text style={tw`text-black font-bold dark:text-white`}>Hello</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
