import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../assets/images/side-icon.png")}
        style={styles.image}
      />


      <Text style={styles.title}>Register Now</Text>

      {/* Signup as Company */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('CompanySignup')}>
        <Text style={styles.signupText}>As a Company</Text>
      </TouchableOpacity>

      {/* Signup as Worker */}
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('WorkerSignup')}>
        <Text style={styles.signupText}>As a Worker</Text>
      </TouchableOpacity>

      {/* Already have an account? Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 50,

  },
  signupButton: {
    width: '90%',
    height: 70,
    backgroundColor: '#3768a1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 10,
  },
  signupText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 5,
    fontSize: 16,
    color: '#007bff',
  },
  image: {
   marginTop:10,
   marginBottom:10,

   
  
  },
});

export default SignupScreen;
