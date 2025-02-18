import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Signup"); 
    }, 2000);
  }, [navigation]); 

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/side-logo.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 100,
  },
});

export default SplashScreen;
