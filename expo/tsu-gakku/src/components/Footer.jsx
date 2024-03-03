import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const FooterComponent = () => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL("https://raretech.site/")}>
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
  );
};

const styles = StyleSheet.create({
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

export default FooterComponent;
