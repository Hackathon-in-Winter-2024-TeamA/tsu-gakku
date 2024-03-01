import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
} from "react-native";

import YellowButton from "../components/YellowButton";
import GrayButton from "../components/GrayButton";

export default function SignUpChildrenScreen({ navigation }) {
  const [children, setChildren] = useState([{ name: "", grade: "" }]);

  const addChild = () => {
    setChildren([...children, { name: "", grade: "" }]);
  };

  const setNewName = (text, index) => {
    const newChildren = [...children];
    newChildren[index].name = text;
    setChildren(newChildren);
  };

  const setNewGrade = (text, index) => {
    const newChildren = [...children];
    newChildren[index].grade = text;
    setChildren(newChildren);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* このビューが全画面をカバー */}
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }} //ここでコンテンツのコンテナを伸ばす
      >
        <View style={styles.inner}>
          <View style={styles.titleRow}>
            <Image
              style={styles.steps}
              source={require("../../assets/images/step-2-4.png")}
            />
            <Text style={styles.titleText}>お子さまの登録</Text>
          </View>

          {children.map((child, index) => (
            <View key={index}>
              <View style={styles.inputTittleRow}>
                <Text style={styles.inputTittle}>お子さまのお名前</Text>
                <Image
                  style={styles.need}
                  source={require("../../assets/images/form-hissu.png")}
                />
              </View>
              <TextInput
                style={styles.input}
                value={child.name}
                onChangeText={(text) => setNewName(text, index)}
                placeholder="お子さまのお名前"
              />
              <View style={styles.inputTittleRow}>
                <Text style={styles.inputTittle}>学年</Text>
                <Image
                  style={styles.need}
                  source={require("../../assets/images/form-hissu.png")}
                />
              </View>
              <TextInput
                style={styles.input}
                value={child.grade}
                onChangeText={(text) => setNewGrade(text, index)}
                placeholder="学年"
              />
            </View>
          ))}

          <View style={styles.separator} />
          <TouchableOpacity onPress={addChild}>
            <View style={styles.addChildContainer}>
              <Image
                style={styles.plus}
                source={require("../../assets/images/form-plus.png")}
              />
              <Text style={styles.addChildLabel}>お子さまを追加する</Text>
            </View>
          </TouchableOpacity>

          <YellowButton
            style={{ marginBottom: 1 }} // ここで下マージンを設定
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

  separator: {
    borderBottomWidth: 2,
    borderBottomColor: "#BCB7B7",
    marginTop: 30,
    marginBottom: 8,
  },
  addChildContainer: {
    flexDirection: "row", // アイコンとテキストを横並びにする
    alignItems: "center", // アイテムを縦方向の中央に配置
  },
  addChildLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0F0F0F",
    marginLeft: 8, // アイコンとテキストの間隔
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
