import { Text, View } from 'react-native';
import tw from '../../theme';
// import tw from 'twrnc';

const AttendanceList = () => {
    return (
        <View>
            <View ><Text style={tw`text-brand-color text-xl`}>AttendanceList1</Text></View>
            <View><Text>AttendanceList2</Text></View>
            <View><Text>AttendanceList3</Text></View>
        </View>
    )
}

export default AttendanceList
