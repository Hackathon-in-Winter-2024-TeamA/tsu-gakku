import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";

export default function SignUpChildrenScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.titleRow}>
          <Image
            style={styles.steps}
            source={require("../../assets/images/step-2-4.png")}
          />
          <Text style={styles.titleText}>お子さまの登録</Text>
        </View>

        <Text style={styles.inputTittle}>お子さまのお名前</Text>
        <TextInput
          style={styles.input}
          value="name"
          placeholder="お子さまのお名前<"
        />
        <Text style={styles.inputTittle}>学年</Text>
        <TextInput style={styles.input} value="grade" />

        <TouchableOpacity style={styles.forSignInButton}>
          <Text style={styles.forSignInButtonLabel}>お子さまを追加する</Text>
        </TouchableOpacity>

        <YellowButton
          label="確認画面へ"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "アカウント作成3" }],
            });
          }}
        />
        <GrayButton
          label="保護者さまの登録に戻る"
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
