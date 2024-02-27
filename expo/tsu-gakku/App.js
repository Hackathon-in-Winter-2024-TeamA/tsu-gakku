import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

import AttendanceList from './src/components/AttendanceList';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!we did it!!!</Text>
            <Text style={tw`text-xl text-red-600`}>Hello World</Text>
            <StatusBar style="auto" />
            <AttendanceList />
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