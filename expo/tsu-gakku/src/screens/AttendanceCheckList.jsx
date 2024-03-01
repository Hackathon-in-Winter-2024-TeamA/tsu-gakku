import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import tw from 'twrnc';


// RareTECH広告-Footer
function Footer () {
  return (
    <>
      <View style={styles.footer}>
        <Text style={styles.footerText1}>presented by</Text>
        <Image
          style={styles.logo}
          source={require("../../assets/images/RareTECH_white.png")}
          />
        <Text style={styles.footerText2}>
          このアプリはプログラミングスクール受講生が作りました
        </Text>
      </View>
    </>
  );
}

// 班に登録されているメンバーリスト
const member = [
  {userID: 1, username: "鈴木　ひなたさん", attendance: "出席"},
  {userID: 2, username: "青木　ゆうとさん", attendance: "欠席"},
  {userID: 3, username: "name1", attendance: "出席"},
  {userID: 4, username: "name2", attendance: "出席"}
];


// 1班

const FirstGroup =() => {
  return(
        <View>
          <ScrollView style={styles.container}>
            <View style={styles.inner}>
              <View style={tw`flex flex-col gap-4`}>
                {member.map((status) => (
                  <View key={status.username} style={tw`flex flex-row h-16 border-b-2 border-stone-300 items-center`}>
                    <View style={tw`flex-grow`}> 
                      <Text style={tw`text-lg`}>{status.username}</Text>
                    </View>
                    <View style={tw`flex-none`}>
                      {status.attendance === "出席" ? (
                        <View style={styles.attendOn}>
                          <Text style={tw`text-lg`}>{status.attendance}</Text>
                        </View>
                        ) : (
                        <View style={styles.attendOff}>
                          <Text style={tw`text-lg`}>{status.attendance}</Text>
                        </View>
                      )}
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <Footer />

          </ScrollView>
        </View>
  );
}


// 2班
function SecondGroup() {
  return (
      <View>
      <ScrollView style={styles.container}>
        <View style={styles.inner}>
          <View style={tw`flex flex-col gap-4`}>
            {member.map((status) => (
              <View key={status.username} style={tw`flex flex-row h-16 border-b-2 border-stone-300 items-center`}>
                <View style={tw`flex-grow`}> 
                  <Text style={tw`text-lg`}>{status.username}</Text>
                </View>
                <View style={tw`flex-none`}>
                  {status.attendance === "出席" ? (
                    <View style={styles.attendOn}>
                      <Text style={tw`text-lg`}>{status.attendance}</Text>
                    </View>
                    ) : (
                    <View style={styles.attendOff}>
                      <Text style={tw`text-lg`}>{status.attendance}</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>

        <Footer />

      </ScrollView>
    </View>
  );
}

// 班のナビゲーション
const Tab = createMaterialTopTabNavigator();
export default function AttendanceList({ }) {
  return (
    // <Tab.Navigator>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {backgroundColor: '#FEDA30'}
        }}
      >
        <Tab.Screen name="1班" component={FirstGroup} />
        <Tab.Screen name="2班" component={SecondGroup} />
      </Tab.Navigator>
  );
}

// スタイルシート
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ffffff",
  },
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 70,
  },
  // Text-文字色指定:黒文字
Text: {
    color : "#0F0F0F",
    fontSize : 18,
  },
  // 出席表示-出席:イエロー
  attendOn: {
    backgroundColor: "#FEDA30",
    height: 48,
    width: 82,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 出席表示-欠席:グレー
  attendOff: {
    backgroundColor: "#BCB7B7",
    height: 48,
    width: 82,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    height: 152,
    backgroundColor: "#0F0F0F",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText1: {
    fontSize: 10,
    color: "#ffffff",
  },
  logo: {
    width: 180,
    height: 45,
    marginVertical: 10,
  },
  footerText2: {
    fontSize: 12,
    color: "#ffffff",
  },
});
