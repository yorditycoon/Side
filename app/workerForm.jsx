import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, CheckBox } from 'react-native';

const RegistrationForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
   
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={require('../assets/images/profile-icon.png')} style={styles.profileIcon} />
        <Text style={styles.profileText}>profile picture</Text>
      </TouchableOpacity>

   
      <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Phone number" placeholderTextColor="#999" value="+971" />
      <TextInput style={styles.input} placeholder="Location" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Date of Birth" placeholderTextColor="#999" />


      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>⬆ Upload</Text>
        </TouchableOpacity>
        <View style={styles.uploadPlaceholder} />
      </View>

     
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>⬆ Upload</Text>
        </TouchableOpacity>
        <View style={styles.uploadPlaceholder} />
      </View>

      <View style={styles.checkboxContainer}>
     
        <Text style={styles.checkboxText}>I have read and agreed to the </Text>
        <TouchableOpacity>
          <Text style={styles.privacyPolicy}>privacy policy</Text>
        </TouchableOpacity>
      </View>

   
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
  },
  profileText: {
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#002E5E',
    color: 'white',
    borderRadius: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  uploadButton: {
    flex: 1,
    backgroundColor: '#002E5E',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadText: {
    color: 'white',
    fontWeight: 'bold',
  },
  uploadPlaceholder: {
    width: 50,
    height: 40,
    backgroundColor: '#ccc',
    marginLeft: 10,
    borderRadius: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    color: '#000',
  },
  privacyPolicy: {
    color: '#002E5E',
    textDecorationLine: 'underline',
  },
  submitButton: {
    backgroundColor: '#002E5E',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
  },
  submitText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegistrationForm;
