import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpParentScreen from "./src/screens/SignUpParentScreen";
import SignUpChildrenScreen from "./src/screens/SignUpChildrenScreen";
import SignUpConfirmScreen from "./src/screens/SignUpConfirmScreen";
import SignUpCompleteScreen from "./src/screens/SignUpCompleteScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ログイン"
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
        {/* メインアプリフローのスクリーン */}
        <Stack.Screen
          name="メイン"
          component={BottomTabNavigator}
          options={({ route }) => {
            // BottomTabNavigator内の現在アクティブなタブのルート名を取得
            const routeName = getFocusedRouteNameFromRoute(route) ?? "ホーム";

            let headerTitle;
            if (routeName === "出欠確認") {
              // 出欠確認タブの場合
              headerTitle = "出欠席確認ページ";
            } else {
              // 他のタブの場合
              headerTitle = routeName; // ボトムタブの`name`をそのまま使用
            }

            // ルート名に基づいてヘッダータイトルを設定
            return { title: headerTitle };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
