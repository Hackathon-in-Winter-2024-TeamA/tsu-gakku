import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpParentScreen from "./src/screens/SignUpParentScreen";
import SignUpChildrenScreen from "./src/screens/SignUpChildrenScreen";
import SignUpConfirmScreen from "./src/screens/SignUpConfirmScreen";
import SignUpCompleteScreen from "./src/screens/SignUpCompleteScreen";
import HomeDummy from "./src/screens/HomeDummy"; //hinakanaさんのHomeに変える
import AttendanceCheckList from "./src/screens/AttendanceCheckList"; //出欠席確認画面

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="アカウント作成2"
        screenOptions={{
          headerStyle: { backgroundColor: "#FEDA30" },
        }}
      >
        <Stack.Screen name="ログイン" component={LogInScreen} />
        <Stack.Screen
          name="アカウント作成1"
          component={SignUpParentScreen}
          options={{ title: "アカウント作成" }}
        />
        <Stack.Screen
          name="アカウント作成2"
          component={SignUpChildrenScreen}
          options={{ title: "アカウント作成" }}
        />
        <Stack.Screen
          name="アカウント作成3"
          component={SignUpConfirmScreen}
          options={{ title: "アカウント作成" }}
        />
        <Stack.Screen
          name="アカウント作成4"
          component={SignUpCompleteScreen}
          options={{ title: "アカウント作成" }}
        />
        <Stack.Screen name="ホーム" component={HomeDummy} />
        <Stack.Screen name="出欠席確認画面" component={AttendanceCheckList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
