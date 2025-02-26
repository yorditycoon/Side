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

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileCircle} onPress={() => handleUpload(setEmiratesIdFile)}>
            {emiratesIdFile ? (
              <Image source={{ uri: emiratesIdFile.uri }} style={styles.profileImage} />
            ) : (
              <Image source={require("../assets/images/profile2-icon.png")} style={styles.profileLogo} />
            )}
          </TouchableOpacity>
          <Text style={styles.profileText}>Add Profile</Text>
        </View>

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
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload(setCvFile)}>
            <Image source={require("../assets/images/upload.png")} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          <View style={styles.fileBox}><Text>{cvFile ? cvFile.name : "No file uploaded"}</Text></View>
        </View>

        <Text style={styles.label}>Emirates ID</Text>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={() => handleUpload(setEmiratesIdFile)}>
            <Image source={require("../assets/images/upload.png")} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          <View style={styles.fileBox}><Text>{emiratesIdFile ? emiratesIdFile.name : "no file upload"}</Text></View>
        </View>
        <Text style={styles.privacyText}>
                          I have read and agreed to the{" "}
                          <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
                            <Text style={styles.link}>privacy policy</Text>
                          </TouchableOpacity>
                        </Text>
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
    padding: 15,
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
  uploadContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(19, 65, 105, 1)",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 15,
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
  fileBox: {
    width: 150,
    height: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
  button: {
    width: "70%",
    height: 50,
    backgroundColor: "rgba(19, 65, 105, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 5,
  },
  profileContainer: {
    alignItems: "center",
    
  },
  profileCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(19, 65, 105, 1)",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileLogo: {
    width: 60,
    height: 60,
    
  },
  profileText: {
    marginTop: 8,
    fontSize: 14,
    color: "rgba(19, 65, 105, 1)",
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

export default WorkerForm;
