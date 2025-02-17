import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/side-icon.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Welcome Back!</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log("Logging in...")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Navigation */}
      <TouchableOpacity onPress={() => useNavigation.navigate("signup")}>
        <Text style={styles.switchText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "rgba(19, 65, 105, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  switchText: {
    fontSize: 16,
    color: "#007bff",
  },
  image: {
    marginTop: 0,
    marginBottom: 100,
  },
});

export default LoginScreen;
