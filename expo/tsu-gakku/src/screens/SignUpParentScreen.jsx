import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";

export default function SignUpParentScreen({ navigation }) {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titleRow}>
          <Image
            style={styles.steps}
            source={require("../../assets/images/step-1-4.png")}
          />
          <Text style={styles.titleText}>保護者さまの登録</Text>
        </View>

        <View style={styles.inputTittleRow}>
          <Text style={styles.inputTittle}>アカウント名</Text>
          <Text style={styles.need}>必須</Text>
        </View>
        <TextInput
          style={styles.input}
          value="username"
          placeholder="アカウント名<"
        />
        <Text style={styles.inputTittle}>アプリ内表示名</Text>
        <TextInput
          style={styles.input}
          value="nickname"
          placeholder="アプリ内表示名"
        />
        <Text style={styles.inputTittle}>メールアドレス</Text>
        <TextInput
          style={styles.input}
          value="email"
          placeholder="メールアドレス"
          autoCapitalize="none"
        />
        <Text style={styles.inputTittle}>パスワード</Text>
        <TextInput
          style={styles.input}
          value="password"
          placeholder="パスワード"
        />
        <Text style={styles.inputTittle}>パスワード（確認用）</Text>
        <TextInput
          style={styles.input}
          value="confirmationPassword"
          placeholder="パスワード（確認用）"
        />
        <View style={styles.termsRow}>
          <Checkbox
            value={agreeToTerms}
            onValueChange={(newValue) => setAgreeToTerms(newValue)}
          />
          <Text style={styles.termsText}>利用規約に同意する</Text>
        </View>

        <YellowButton
          label="お子さまの登録へ"
          disabled={!agreeToTerms}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "アカウント作成2" }],
            });
          }}
        />
        <GrayButton
          label="キャンセル"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "ログイン" }],
            });
          }}
        />
      </View>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flexGrow: 1, // これにより、コンテンツが少ない場合でもフッターが下部に表示される
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

  inputTittleRow: {
    flexDirection: "row",
  },
  inputTittle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F0F0F",
  },
  need: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#FEDA30",
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#BCB7B7",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    marginBottom: 24,
    borderRadius: 8,
  },
  termsRow: {
    flexDirection: "row", // チェックボックスとテキストを横並びにする
    alignItems: "center", // 中央揃え
    marginBottom: 24, // 余白
  },
  termsText: {
    marginLeft: 8, // チェックボックスとテキストの間の余白
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
