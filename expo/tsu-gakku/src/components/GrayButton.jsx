import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { func, string, object } from "prop-types";

export default function GrayButton(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

GrayButton.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: object,
};

GrayButton.defaultProps = {
  onPress: null,
  style: {}, // デフォルトで空のオブジェクトを指定
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    backgroundColor: "#ffffff",
    borderColor: "#BCB7B7",
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: "center", // 中央揃えにするために追加
    alignItems: "center", // 中央揃えにするために追加
    marginTop: 32,
    marginBottom: 32,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F0F0F",
    textAlign: "center",
    paddingVertical: 14,
  },
});
