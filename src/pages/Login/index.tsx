import { View, Image, StyleSheet, ImageBackground } from "react-native";
import Logo from "../../../assets/logo.png";
import Cloud from "../../../assets/cloud.png";

import { CloudImage, LoginView, LogoImage, SafeAreaView } from "./styles";
import { TextField } from "../../components/TextField";

export default function Login() {
  return (
    <SafeAreaView>
      <LoginView>
        <CloudImage source={Cloud} resizeMode="contain" />
        <LogoImage source={Logo} resizeMode="contain" />
        <TextField title="Nickname" />
      </LoginView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#EFB6F4",
  },
});
