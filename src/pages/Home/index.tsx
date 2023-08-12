import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  return (
    <View style={styles.tela}>
      <Text>Textooo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "#BBBBBB",
  },
});
