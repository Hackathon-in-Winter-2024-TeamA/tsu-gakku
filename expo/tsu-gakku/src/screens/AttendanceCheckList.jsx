import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import FooterComponent from "../components/Footer";

// 1班に登録されているメンバーリスト
const firstGroupMembers = [
  { userID: 1, username: "鈴木　ひなたさん", attendance: "出席" },
  { userID: 2, username: "青木　ゆうとさん", attendance: "欠席" },
  { userID: 3, username: "佐藤　大地さん", attendance: "出席" },
  { userID: 4, username: "田中　恵麻さん", attendance: "出席" },
];
// 2班に登録されているメンバーリスト
const secondGroupMembers = [
  { userID: 5, username: "山本　かおりさん", attendance: "出席" },
  { userID: 6, username: "麻生　武さん", attendance: "出席" },
  { userID: 7, username: "斉藤　明日香さん", attendance: "出席" },
  { userID: 8, username: "長谷川　健太郎さん", attendance: "欠席" },
  { userID: 9, username: "吉野　京子さん", attendance: "出席" },
  // { userID: 10, username: "山本　かおりさん", attendance: "出席" },
  // { userID: 11, username: "麻生　武さん", attendance: "出席" },
  // { userID: 12, username: "斉藤　明日香さん", attendance: "出席" },
  // { userID: 13, username: "長谷川　健太郎さん", attendance: "欠席" },
  // { userID: 14, username: "吉野　京子さん", attendance: "出席" },
];

// 1班

const FirstGroup = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[styles.container, { flexGrow: 1 }]}>
        <View style={styles.inner}>
          <View style={tw`flex flex-col gap-4`}>
            {firstGroupMembers.map((status) => (
              <View
                key={status.username}
                style={tw`flex flex-row h-16 border-b-2 border-stone-300 items-center`}
              >
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
      </ScrollView>
      <FooterComponent />
    </View>
  );
};

// 2班
function SecondGroup() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[styles.container, { flexGrow: 1 }]}>
        <View style={styles.inner}>
          <View style={tw`flex flex-col gap-4`}>
            {secondGroupMembers.map((status) => (
              <View
                key={status.username}
                style={tw`flex flex-row h-16 border-b-2 border-stone-300 items-center`}
              >
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
      </ScrollView>
      <FooterComponent />
    </View>
  );
}

// 班のナビゲーション
const Tab = createMaterialTopTabNavigator();
export default function AttendanceList({}) {
  return (
    // <Tab.Navigator>
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: "#FEDA30" },
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
    color: "#0F0F0F",
    fontSize: 18,
  },
  // 出席表示-出席:イエロー
  attendOn: {
    backgroundColor: "#FEDA30",
    height: 48,
    width: 82,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  // 出席表示-欠席:グレー
  attendOff: {
    backgroundColor: "#BCB7B7",
    height: 48,
    width: 82,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
