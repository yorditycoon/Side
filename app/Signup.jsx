import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/side-icon.png")}
        style={styles.image}
        accessibilityLabel="Side app logo"
      />

      <Text style={styles.title}>Register Now</Text>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('CompanyForm')}

        accessibilityRole="button"
        accessibilityLabel="Sign up as a company"
        accessibilityHint="Navigate to company registration form"
      >
        <Text style={styles.signupText}>As a Company</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => navigation.navigate('WorkerForm')}

        accessibilityRole="button"
        accessibilityLabel="Sign up as a worker"
        accessibilityHint="Navigate to worker registration form"
      >
        <Text style={styles.signupText}>As a Worker</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Login')}
        accessibilityRole="button"
        accessibilityLabel="Already have an account? Login"
        accessibilityHint="Navigate to login screen"
      >
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
    backgroundColor: 'rgba(19, 65, 105, 1)',
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
    width: 150,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
    right: 20,
    
  },
});

SignupScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignupScreen;
