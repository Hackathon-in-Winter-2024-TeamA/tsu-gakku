import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

import FooterComponent from "../components/Footer";

const { width } = Dimensions.get("window"); // デバイスの幅を取得

export default function HomeScreen({ navigation }) {
  // モーダルのための定義
  const [modalVisible, setModalVisible] = useState(false);
  const closeModalVisible = () => {
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.absenceContactArea}>
                <View style={styles.innerContainer}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/images/home-kesseki-rogo.png")}
                  />
                  <Text style={styles.absenceContactText}>欠席連絡</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* モーダル */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <SafeAreaView>
                <ScrollView>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                      <Text style={styles.modalTabTittle}>欠席連絡</Text>

                      <View>
                        <Text style={styles.modalFirstTittle}>本日</Text>

                        <Text style={styles.modalSecondTittle}>
                          ３月２日 土曜日
                        </Text>

                        <Text style={styles.modalThirdTittle}>
                          欠席連絡をしますか？
                        </Text>
                      </View>

                      <View>
                        <Text style={styles.modalFourTittle}>
                          欠席連絡するお子様を選択してください
                        </Text>
                      </View>

                      <View style={styles.checkArea}>
                        <Image
                          style={styles.checkImage}
                          source={require("../../assets/images/check-circle.png")}
                        />

                        <Text style={styles.modalFiveTittle}>
                          青木　ゆうとさん
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={styles.closeYellowButtonContainer}
                        onPress={() => {
                          closeModalVisible();
                          navigation.navigate("出欠確認");
                        }}
                      >
                        <Text style={styles.closeButton}>欠席連絡する</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.closeGlayButtonContainer}
                        onPress={closeModalVisible}
                      >
                        <Text style={styles.closeButton}>キャンセル</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </Modal>

            <View style={styles.twoBlockInnerContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("出欠確認");
                }}
              >
                <View style={styles.twoBlockArea}>
                  <View style={styles.innerContainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/home-itiran-logo.png")}
                    />

                    <Text style={styles.absenceContactText}>出欠確認</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("マイページ");
                }}
              >
                <View style={styles.twoBlockArea}>
                  <View style={styles.innerContainer}>
                    <Image
                      style={styles.image}
                      source={require("../../assets/images/home-mypage-logo.png")}
                    />
                    <Text style={styles.absenceContactText}>マイページ</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: width * 0.1, // 画面幅に基づいたパディング
    paddingVertical: 97,
    justifyContent: "center", // 子要素を縦方向の中央に配置
    alignItems: "center", // 子要素を横方向の中央に配置
  },

  //欠席連絡エリア
  absenceContactArea: {
    height: 185,
    width: 350,
    backgroundColor: "#FFF8D7",
    borderWidth: 3,
    borderColor: "#FEDA30",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  //欠席連絡・出欠確認・マイページのアイコンとテキスト
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
  },
  absenceContactText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 18,
  },

  // モーダルのスタイル
  modalContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .6)",
  },
  modalView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 600,
    width: 300,
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTabTittle: {
    marginBottom: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
  },
  modalFirstTittle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  modalSecondTittle: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalThirdTittle: {
    marginBottom: 40,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  modalFourTittle: {
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    justifyContent: "center",
    marginTop: 15,
  },
  checkArea: {
    flexDirection: "row",
    width: 240,
    height: 40,
    borderRadius: 8,
    marginBottom: 150,
    backgroundColor: "#FFF8D7",
    borderWidth: 2,
    borderColor: "#FEDA30",
    alignItems: "center",
    justifyContent: "left",
  },
  checkImage: {
    height: 20,
    width: 20,
    marginLeft: 30,
  },
  modalFiveTittle: {
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0F0F0F",
    fontSize: 14,
    justifyContent: "center",
    marginLeft: 25,
    marginTop: 10,
  },
  closeYellowButtonContainer: {
    height: 40,
    width: 240,
    backgroundColor: "#FEDA30",
    borderRadius: 8,
    justifyContent: "center", // 中央揃えにする
    alignItems: "center", // 中央揃えにする
    marginTop: 20,
    marginBottom: 5,
  },
  closeButton: {
    fontSize: 18,
    color: "#0F0F0F",
  },
  closeGlayButtonContainer: {
    height: 40,
    width: 240,
    backgroundColor: "#ffffff",
    borderColor: "#BCB7B7",
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: "center", // 中央揃えにする
    alignItems: "center", // 中央揃えにする
    marginTop: 20,
    marginBottom: 20,
  },

  //出欠確認とマイページのエリア
  twoBlockInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // 子要素を均等に配置
    paddingHorizontal: width * 0.1, // 画面幅に基づいたパディングを追加
  },
  twoBlockArea: {
    flexDirection: "row",
    height: 185,
    width: "80%",
    borderWidth: 3,
    borderColor: "#FEDA30",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
    marginLeft: 16,
    marginRight: 16,
  },
});
