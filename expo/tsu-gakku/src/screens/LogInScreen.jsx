import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";

import YellowButton from "../components/YellowButton";

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState(""); // メールアドレス用の状態
  const [password, setPassword] = useState(""); // パスワード用の状態

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.inputArea}>
          <Text style={styles.inputTittle}>メールアドレス</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail} // メールアドレスが変更されたときのハンドラ
            placeholder="メールアドレス"
            autoCapitalize="none"
          />
          <Text style={styles.inputTittle}>パスワード</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword} // パスワードが変更されたときのハンドラ
            placeholder="パスワード"
            secureTextEntry={true} // パスワード入力を隠す
          />
        </View>
        <YellowButton
          style={{ marginTop: 60 }} // ここで下マージンを設定
          label="ログイン"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "ホーム" }],
            });
          }}
        />
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "アカウント作成1" }],
            });
          }}
        >
          <Text style={styles.forSignInLabel}>
            アカウントをお持ちでない方はこちら
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsOfUseButton}>
          <Text style={styles.termsOfUseButtonLabel}>利用規約について</Text>
        </TouchableOpacity>
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
    paddingVertical: 30,
  },
  inputArea: {
    marginTop: 60,
  },
  inputTittle: {
    fontWeight: "bold",
    color: "#0F0F0F",
    marginTop: 10,
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

  separator: {
    borderBottomWidth: 2,
    borderBottomColor: "#BCB7B7",
    marginBottom: 20,
  },
  forSignInLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F0F0F",
    textAlign: "center",
    paddingVertical: 24,
    marginBottom: 32,
  },
  termsOfUseButton: {
    height: 48,
    backgroundColor: "#Ffffff",
  },
  termsOfUseButtonLabel: {
    fontSize: 16,
    color: "#0F0F0F",
    textAlign: "center",
    paddingVertical: 24,
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
