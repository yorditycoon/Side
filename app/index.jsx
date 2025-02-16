import { StyleSheet, Text, View, Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/side-logo.png")}
        style={{ width: 400, height: 200 }}
      />
      <View style={styles.main}>
        <Text style={styles.title}>Hello Yordanos</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",

    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 44,
    color: "#38434D",
    fontWeight: 500,
    fontSize: 36,
    color: "#38434D",
  },
});
