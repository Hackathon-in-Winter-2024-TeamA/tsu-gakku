import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpParentScreen from "./src/screens/SignUpParentScreen";
import SignUpChildrenScreen from "./src/screens/SignUpChildrenScreen";
import SignUpConfirmScreen from "./src/screens/SignUpConfirmScreen";
import SignUpCompleteScreen from "./src/screens/SignUpCompleteScreen";
import HomeDummy from "./src/screens/HomeDummy"; //hinakanaさんのHomeに変える

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#FEDA30" },
        }}
      >
        <Stack.Screen name="ログイン" component={LogInScreen} />
        <Stack.Screen name="アカウント作成1" component={SignUpParentScreen} />
        <Stack.Screen name="アカウント作成2" component={SignUpChildrenScreen} />
        <Stack.Screen name="アカウント作成3" component={SignUpConfirmScreen} />
        <Stack.Screen name="アカウント作成4" component={SignUpCompleteScreen} />
        <Stack.Screen name="ホーム" component={HomeDummy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
