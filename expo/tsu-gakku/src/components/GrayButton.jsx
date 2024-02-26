import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { func, string } from "prop-types";

export default function GrayButton(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

GrayButton.propTypes = {
  label: string.isRequired,
  onPress: func,
};

GrayButton.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    height: 48,
    backgroundColor: "#ffffff",
    borderColor: "#BCB7B7",
    borderWidth: 3,
    borderRadius: 8,
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
