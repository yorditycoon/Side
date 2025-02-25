import React, { useState } from "react";
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from 'expo-document-picker';

const WorkerForm = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+971");
  const [location, setLocation] = useState("Dubai");
  const [password, setPassword] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [emiratesIdFile, setEmiratesIdFile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null); // New state for profile picture
  const [error, setError] = useState("");

  const handleUpload = async (setFile) => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['image/*', 'application/pdf'],
        copyToCacheDirectory: true,
      });
      
      if (result.type === 'success') {
        setFile({
          name: result.name,
          uri: result.uri,
          type: result.mimeType
        });
      }
    } catch (err) {
      console.log('Error picking document:', err);
    }
  };

  const handleProfilePictureUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['image/*'],
      copyToCacheDirectory: true,
    });

    if (result.type === 'success') {
      setProfilePicture({
        uri: result.uri,
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        
        {/* Profile Picture Section */}
        <TouchableOpacity onPress={handleProfilePictureUpload}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture.uri }} style={styles.profilePicture} />
          ) : (
            <View style={styles.profilePlaceholder}>
<Image source={require("../assets/images/profile-icon.png")} style={styles.profilePicture} />

            </View>
          )}
        </TouchableOpacity>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+971"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Text style={styles.label}>Location</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={location}
            onValueChange={(itemValue) => setLocation(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Dubai" value="Dubai" />
            <Picker.Item label="Abu Dhabi" value="Abu Dhabi" />
            <Picker.Item label="Sharjah" value="Sharjah" />
            <Picker.Item label="Ajman" value="Ajman" />
            <Picker.Item label="Ras Al Khaimah" value="Ras Al Khaimah" />
          </Picker>
        </View>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>CV</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload(setCvFile)}>
          <Image source={require("../assets/images/upload.png")} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload CV</Text>
        </TouchableOpacity>
        <Text>{cvFile ? cvFile.name : "No CV uploaded"}</Text>

        <Text style={styles.label}>Emirates ID</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload(setEmiratesIdFile)}>
          <Image source={require("../assets/images/upload.png")} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload Emirates ID</Text>
        </TouchableOpacity>
        <Text>{emiratesIdFile ? emiratesIdFile.name : "No Emirates ID uploaded"}</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            if (!fullName || !email || !phone || !password || !cvFile || !emiratesIdFile) {
              setError("Please fill in all fields including the CV and Emirates ID");
            } else if (!/\S+@\S+\.\S+/.test(email)) {
              setError("Please enter a valid email address");
            } else if (phone.length < 9 || !/^\+?\d+$/.test(phone)) {
              setError("Please enter a valid phone number");
            } else if (password.length < 8) {
              setError("Password must be at least 8 characters");
            } else {
              setError("");
              navigation.navigate('Signup');
            }
          }}
          accessibilityRole="button"
          accessibilityLabel="Submit worker registration"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  placeholderText: {
    color: "#fff",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 3,
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
  pickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 50,
  },
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "rgba(19, 65, 105, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 5,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(19, 65, 105, 1)",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginRight: 10,
  },
  uploadIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  uploadText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  privacyText: {
    marginLeft: 5,
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
});

WorkerForm.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
