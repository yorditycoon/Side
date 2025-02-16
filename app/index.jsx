<<<<<<< HEAD
import { StyleSheet, Text, View, Image } from "react-native";
=======
import { StyleSheet, Text, View } from "react-native";
>>>>>>> 93b76e9 (file changed)

export default function Page() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Image
        source={require("../assets/images/side-logo.png")}
        style={{ width: 400, height: 200 }}
      />
=======
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        
      </View>
>>>>>>> 93b76e9 (file changed)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
<<<<<<< HEAD
    justifyContent: "center",
=======
>>>>>>> 93b76e9 (file changed)
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
<<<<<<< HEAD

=======
    maxWidth: 960,
>>>>>>> 93b76e9 (file changed)
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
<<<<<<< HEAD
    fontSize: 44,
    color: "#38434D",
    fontWeight: 500,
=======
    fontSize: 36,
    color: "#38434D",
>>>>>>> 93b76e9 (file changed) 
  },
});
