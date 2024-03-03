import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import FooterComponent from "../components/Footer";

export default function MyPageScreen({ navigation }) {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTittle}>保護者さまのご登録情報</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>アカウント名</Text>
            <Text style={styles.data}>HackathonTeamA</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>アプリ表示名</Text>
            <Text style={styles.data}>あおき</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>メールアドレス</Text>
            <Text style={styles.data}>HackathonTeamA@test.co.jp</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>パスワード</Text>
            <Text style={styles.data}>＊＊＊＊＊＊＊＊</Text>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.edditButton}>
              <Text style={styles.edditText}>編集する</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTittle}>お子さまのご登録情報</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>お名前</Text>
            <Text style={styles.data}>青木ゆうとさん</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>学年</Text>
            <Text style={styles.data}>3年</Text>
            <TouchableOpacity style={styles.edditButton}>
              <Text style={styles.edditText}>編集する</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FooterComponent />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 70,
  },
  infoContainer: {
    borderWidth: 2,
    borderColor: "#BCB7B7",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  infoTittle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F0F0F",
    marginTop: 20,
    marginBottom: 12,
  },
  bold: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  data: {
    fontSize: 14,
    paddingBottom: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#BCB7B7",
    marginBottom: 20,
  },
  edditButton: {
    backgroundColor: "#FEDA30",
    height: 48,
    width: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  edditText: {
    color: "#0F0F0F",
    fontSize: 18,
  },
});
