import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";

import Terms from "../components/Terms";

export default function TermsModal({ visible, onClose }) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTermsTittle}>利用規約</Text>
              <Text>{Terms}</Text>
              <TouchableOpacity
                style={styles.closeButtonContainer}
                onPress={onClose}
              >
                <Text style={styles.closeButton}>閉じる</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ermsText: {
    marginLeft: 8, // チェックボックスとテキストの間の余白
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, .6)",
  },
  modalView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTermsTittle: {
    marginBottom: 20,
    color: "dodgerblue",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  closeButtonContainer: {
    height: 48,
    backgroundColor: "#ffffff",
    borderColor: "#BCB7B7",
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: "center", // 中央揃えにするために追加
    alignItems: "center", // 中央揃えにするために追加
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  closeButton: {
    fontSize: 18,
    color: "#0F0F0F",
  },
});
