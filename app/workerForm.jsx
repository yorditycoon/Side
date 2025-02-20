import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import * as DocumentPicker from 'expo-document-picker';

const RegistrationForm = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("+971");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [error, setError] = useState("");

  const handleProfileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*'],
        copyToCacheDirectory: true,
      });
      if (result.type === 'success') {
        setProfileImage({
          uri: result.uri,
          name: result.name,
          type: result.mimeType
        });
      }
    } catch (err) {
      console.log('Error picking profile image:', err);
    }
  };

  const handleCVUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf'],
        copyToCacheDirectory: true,
      });
      if (result.type === 'success') {
        setCvFile({
          uri: result.uri,
          name: result.name,
          type: result.mimeType
        });
      }
    } catch (err) {
      console.log('Error picking CV:', err);
    }
  };

  const handleIDUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });
      if (result.type === 'success') {
        setIdFile({
          uri: result.uri,
          name: result.name,
          type: result.mimeType
        });
      }
    } catch (err) {
      console.log('Error picking ID:', err);
    }
  };

  const handleSubmit = () => {
    if (!fullName || !phone || !location || !email || !dob || !profileImage || !cvFile || !idFile) {
      setError("Please fill in all fields and upload all required documents");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address (e.g., user@example.com)");
    } else if (phone.length < 9 || !/^\+?\d+$/.test(phone)) {
      setError("Please enter a valid phone number");
    } else {
      setError("");
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/images/profile-icon.png")}
        style={styles.profileImage}
        accessibilityLabel="Profile icon"
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleProfileUpload}>
        <View style={styles.profileButton}>
          <Image 
            source={require('../assets/images/upload-icon.png')} 
            style={styles.uploadIcon}
            accessibilityLabel="Upload icon"
          />
          <Text style={styles.submitText}>Profile</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput 
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
          accessibilityLabel="Full name input"
          accessibilityHint="Enter your full name"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          accessibilityLabel="Phone number input"
          accessibilityHint="Enter your phone number"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput 
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          accessibilityLabel="Location input"
          accessibilityHint="Enter your location"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email input"
          accessibilityHint="Enter your email address"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput 
          style={styles.input}
          value={dob}
          onChangeText={setDob}
          accessibilityLabel="Date of birth input"
          accessibilityHint="Enter your date of birth"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>CV</Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleCVUpload}>
          <View style={styles.profileButton}>
            <Image 
              source={require('../assets/images/upload-icon.png')} 
              style={styles.uploadIcon}
              accessibilityLabel="Upload icon"
            />
            <Text style={styles.submitText}>Upload your CV</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Emirates ID</Text>
        <TouchableOpacity style={styles.submitButton} onPress={handleIDUpload}>
          <View style={styles.profileButton}>
            <Image 
              source={require('../assets/images/upload-icon.png')} 
              style={styles.uploadIcon}
              accessibilityLabel="Upload icon"
            />
            <Text style={styles.submitText}>Upload your ID</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.privacyText}>
          I have read and agreed to the{" "}
          <Text style={styles.link}>privacy policy</Text>
        </Text>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
        accessibilityRole="button"
        accessibilityLabel="Submit registration"
        accessibilityHint="Submit your worker registration form"
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    margin: 20,
    resizeMode: 'contain',
  },
  profileButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 5,
    backgroundColor: "#F1F1F1",
    paddingHorizontal: 10,
  },
  uploadIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  privacyText: {
    marginLeft: 5,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: "rgba(19, 65, 105, 1)",
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: "center",
    marginVertical: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

RegistrationForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default RegistrationForm;
