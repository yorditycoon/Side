import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,Image, uploadedFile} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Corrected Import

const CompanyForm = () => {
  const navigation = useNavigation();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+971");
  const [location, setLocation] = useState("Dubai");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
              source={require("../assets/images/side-icon.png")}
              style={styles.image}
            />
      

      <Text style={styles.label}>Company Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
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
            <Text style={styles.label}>Business Licence</Text>

  <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Image source={require("../assets/images/upload.png")} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload</Text>
        </TouchableOpacity>
        <View style={styles.fileBox}>
          {uploadedFile ? <Text>{uploadedFile.name}</Text> : <Text>No file uploaded</Text>}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => console.log("home") }>
        <Text style={styles.buttonText}>Summit</Text>
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

    color: '#000000',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    
    alignSelf: "flex-start",
    marginBottom: 5,
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
    marginTop: 10,
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
  
  switchText: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 15,
  },

image: {
 marginTop:5,
 marginBottom:40,
},

});

export default CompanyForm;
