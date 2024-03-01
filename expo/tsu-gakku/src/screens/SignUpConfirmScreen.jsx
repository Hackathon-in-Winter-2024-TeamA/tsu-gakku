import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";
import { style } from "twrnc";

export default function SignUpConfirmScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.titleRow}>
            <Image
              style={styles.steps}
              source={require("../../assets/images/step-3-4.png")}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>ご登録内容の確認</Text>
              <Text style={styles.subTittleText}>
                お間違えないか、ご確認ください
              </Text>
            </View>
          </View>

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
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTittle}>お子さまのご登録情報</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>お名前</Text>
            <Text style={styles.data}>青木ゆうとさん</Text>
            <View style={styles.separator} />
            <Text style={styles.bold}>学年</Text>
            <Text style={styles.data}>3年</Text>
          </View>

          <YellowButton
            style={{ marginBottom: 1, marginTop: 40 }} // ここで下マージンを設定
            label="登録する"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "アカウント作成4" }],
              });
            }}
          />
          <GrayButton
            label="登録画面に戻る"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "アカウント作成1" }],
              });
            }}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => Linking.openURL("https://raretech.site/")}
      >
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  titleRow: {
    flexDirection: "row", // チェックボックスとテキストを横並びにする
    alignItems: "center", // 中央揃え
    justifyContent: "flex-start", // 左寄せに変更
    marginBottom: 40, // 余白
  },
  steps: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  titleContainer: {
    flexDirection: "column", // タイトルとサブタイトルを縦に並べる
    justifyContent: "center", // 中央寄せ
    flex: 1, // タイトルが残りのスペースをすべて使用するようにする
  },
  titleText: {
    fontSize: 18,
    color: "#0F0F0F",
    fontWeight: "bold",
    textAlign: "center", // タイトルテキストを中央寄せに
    marginBottom: 4,
  },
  subTittleText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#BCB7B7",
    textAlign: "center",
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

  footer: {
    // flex: 1,
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
