import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  CheckBox,
  ScrollView,
} from "react-native";
import { launchImageLibrary } from 'react-native-image-picker';


const RegistrationForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [cv, setCv] = useState(null);
  const [emiratesId, setEmiratesId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const pickImage = (setImage) => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/images/profile-icon.png")}
        style={styles.profileImage}
      />
          <TouchableOpacity  style={styles.submitButton} >
              <View style={styles.profileButton}>
              <Image style={{paddingRight:10}} source={require('../assets/images/upload-icon.png')} />
              <Text style={styles.submitText}>Upload your picture</Text>
           
              </View>
             
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          defaultValue="+971 "
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} keyboardType="email-address" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} />
      </View>

   
      <View style={styles.inputGroup}>
        <Text style={styles.label}>CV</Text>
        <TouchableOpacity  style={styles.submitButton} >
              <View style={styles.profileButton}>
              <Image style={{paddingRight:10}} source={require('../assets/images/upload-icon.png')} />
              <Text style={styles.submitText}>Upload your CV</Text>
           
              </View>
             
      </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Emirates ID</Text>
        <TouchableOpacity  style={styles.submitButton} >
              <View style={styles.profileButton}>
              <Image style={{paddingRight:10}} source={require('../assets/images/upload-icon.png')} />
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

      <TouchableOpacity style={styles.submitButton}>
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
  profileContainer: {
    alignSelf: "center",
    marginBottom: 20,

    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    flexDirection: "row",
    alignSelf: "center",
    margin: 20,
    },
    profileButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
  },
  inputGroup: {
    marginBottom: 10,
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
  uploadButton: {
    backgroundColor: "#002E5E",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  uploadText: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
  submitButton: {
    backgroundColor: "#002E5E",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
      fontSize: 16,
      paddingLeft: 10,
  },
});

export default RegistrationForm;
