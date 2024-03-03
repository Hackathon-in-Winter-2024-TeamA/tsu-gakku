import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// 画面コンポーネントをインポート
import HomeScreen from "../screens/Home";
import AttendanceList from "../screens/AttendanceCheckList";
import MyPageScreen from "../screens/MyPageScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "ホーム") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "出欠確認") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "マイページ") {
            iconName = focused ? "person" : "person-outline";
          }

          // アイコンコンポーネントを返す
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FEDA30",
        tabBarInactiveTintColor: "#4A4A4A",
        headerTitle: route.name, // これにより、アクティブなタブに応じてヘッダータイトルが変更されます。
        headerShown: false, // これにより全てのタブスクリーンのヘッダーが非表示になります
      })}
    >
      <Tab.Screen name="ホーム" component={HomeScreen} />
      <Tab.Screen
        name="出欠確認"
        component={AttendanceList}
        options={{ tabBarLabel: "出欠確認" }} // これがタブの下に表示されるラベルです
      />
      <Tab.Screen name="マイページ" component={MyPageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
