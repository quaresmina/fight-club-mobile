import { View, Image, StyleSheet } from "react-native";
import Logo from "../../../assets/logo.png";

export default function Login() {
  return (
    <View style={styles.page}>
      <Image source={Logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#EFB6F4",
  },
});
