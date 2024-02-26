import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";

export default function SignUpConfirmScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titleRow}>
          <Image
            style={styles.steps}
            source={require("../../assets/images/step-3-4.png")}
          />
          <Text style={styles.titleText}>ご登録内容の確認</Text>
          <Text>お間違えないか、ご確認ください</Text>
        </View>

        <Text style={styles.inputTittle}>保護者さまのご登録内容</Text>

        {/* ここは仮のデータに変える */}
        <TextInput
          style={styles.input}
          value="Email Address"
          placeholder="メールアドレス"
        />

        <Text style={styles.inputTittle}>お子さまのご登録内容</Text>

        {/* ここは仮のデータに変える */}
        <TextInput
          style={styles.input}
          value="Password"
          placeholder="パスワード"
        />
        <YellowButton
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
  inner: {
    paddingHorizontal: 18,
    paddingVertical: 70,
  },
  inputTittle: {
    fontWeight: "bold",
    color: "#0F0F0F",
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

  forSignInButton: {
    height: 48,
    backgroundColor: "#Ffffff",
    borderColor: "#ffffff",
    borderTopColor: "#BCB7B7",
    borderWidth: 2,
    marginBottom: 32,
  },
  forSignInButtonLabel: {
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
