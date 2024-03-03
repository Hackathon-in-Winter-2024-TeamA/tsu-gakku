import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import YellowButton from "../components/YellowButton";

export default function SignUpCompleteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titleRow}>
          <Image
            style={styles.steps}
            source={require("../../assets/images/step-4-4.png")}
          />
          <Text style={styles.titleText}>ご登録の完了</Text>
        </View>

        <View style={styles.centerContent}>
          <Text style={styles.finish}>登録が完了しました</Text>
          <Image
            style={styles.circle}
            source={require("../../assets/images/check-circle.png")}
          />
        </View>

        <YellowButton
          style={{ marginTop: 150 }} // ここで下マージンを設定
          label="ホーム画面へ"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "メイン" }],
            });
          }}
        />
      </View>

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
    justifyContent: "space-between", // コンテンツとフッターの間にスペースを設ける
  },
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  titleRow: {
    flexDirection: "row", // チェックボックスとテキストを横並びにする
    alignItems: "center", // 中央揃え
    justifyContent: "flex-start", // 左寄せに変更
    marginBottom: 24, // 余白
  },
  steps: {
    width: 64,
    height: 64,
  },
  titleText: {
    fontSize: 18,
    color: "#0F0F0F",
    fontWeight: "bold",
    textAlign: "center", // タイトルをテキストの中央に配置
    flex: 1, // タイトルが残りのスペースをすべて使用するようにする
  },

  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  finish: {
    fontSize: 20,
    fontWeight: "bold",
  },
  circle: {
    alignSelf: "center", // 要素自身を中央揃え
    marginTop: 40, // テキストとの間隔
  },

  footer: {
    height: 152,
    backgroundColor: "#0F0F0F",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
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
