import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { func, string, bool, object } from "prop-types";

export default function YellowButton(props) {
  const { label, onPress, style, disabled = false } = props; // disabledのデフォルト値をfalseに設定

  // 背景色を動的に設定
  const backgroundColor = disabled ? "#FFF8D7" : "#FEDA30";

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor }, style]} // backgroundColorを動的に設定
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

YellowButton.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: object, // 外部でスタイルのため追加
  disabled: bool, // disabledのためのPropTypesを追加
};

YellowButton.defaultProps = {
  onPress: null,
  style: {}, // デフォルトで空のオブジェクトを指定
  disabled: false, // デフォルトでfalseを指定
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    backgroundColor: "#FEDA30",
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
