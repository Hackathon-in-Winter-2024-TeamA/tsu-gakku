import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Checkbox from "expo-checkbox";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";
import TermsModal from "../components/TermsModal";

export default function SignUpParentScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationpassword, setConfirmationpassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [termsModal, setTermsModal] = useState(false);

  const openTermsModal = () => {
    setTermsModal(true);
  };
  const closeTermsModal = () => {
    setTermsModal(false);
  };

  return (
    <View style={{ flex: 1 }}>
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
            <Image
              style={styles.need}
              source={require("../../assets/images/form-hissu.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="アカウント名"
          />
          <View style={styles.inputTittleRow}>
            <Text style={styles.inputTittle}>アプリ内表示名</Text>
            <Image
              style={styles.need}
              source={require("../../assets/images/form-hissu.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            value={nickname}
            onChangeText={setNickname}
            placeholder="アプリ内表示名"
          />
          <View style={styles.inputTittleRow}>
            <Text style={styles.inputTittle}>メールアドレス</Text>
            <Image
              style={styles.need}
              source={require("../../assets/images/form-hissu.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail} // メールアドレスが変更されたときのハンドラ
            placeholder="メールアドレス"
            autoCapitalize="none"
          />
          <View style={styles.inputTittleRow}>
            <Text style={styles.inputTittle}>パスワード</Text>
            <Image
              style={styles.need}
              source={require("../../assets/images/form-hissu.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword} // パスワードが変更されたときのハンドラ
            placeholder="パスワード"
            secureTextEntry={true} // パスワード入力を隠す
          />
          <View style={styles.inputTittleRow}>
            <Text style={styles.inputTittle}>パスワード（確認用）</Text>
            <Image
              style={styles.need}
              source={require("../../assets/images/form-hissu.png")}
            />
          </View>
          <TextInput
            style={styles.input}
            value={confirmationpassword}
            onChangeText={setConfirmationpassword}
            placeholder="パスワード（確認用）"
          />

          <View style={styles.termsRow}>
            <Checkbox
              value={agreeToTerms}
              onValueChange={(newValue) => setAgreeToTerms(newValue)}
            />
            <TouchableOpacity onPress={openTermsModal}>
              <Text style={styles.termsText}>利用規約に同意する</Text>
            </TouchableOpacity>
          </View>

          <TermsModal visible={termsModal} onClose={closeTermsModal} />

          <YellowButton
            style={{ marginBottom: 1 }} // ここで下マージンを設定
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
            style={{ marginBottom: 60 }} // ここで下マージンを設定
            label="キャンセル"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "ログイン" }],
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
  // contentContainer: {
  //   flexGrow: 1, // これにより、コンテンツが少ない場合でもフッターが下部に表示される
  // },
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
    alignItems: "center",
  },
  inputTittle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F0F0F",
  },
  need: {
    marginLeft: 8,
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
    marginTop: 60,
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
