import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

const Profile = ({ navigation, rating = 0 }) => {

  const [profileImage, setProfileImage] = useState(null);

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
        <View style={styles.blueRectangle}>
          <TouchableOpacity style={styles.profileCircle} onPress={() => handleUpload(setProfileImage)}>
            <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('OtherPage')}>
              <Icon name="menu" size={24} color="#fff" /> 
            </TouchableOpacity>
            {profileImage ? (<Image source={{ uri: profileImage.uri }} style={styles.profileImage} />
            ) : (
              <Image source={require("../assets/images/profile2-icon.png")} style={styles.profileLogo} />
            )}
          </TouchableOpacity>
          <Text style={styles.name}>Henok Samson</Text>

          {/* New Section for Rating */}
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingValue}>{rating}</Text> 
            <View style={styles.ratingColumn}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Text key={star} style={styles.ratingStars}>
                  {star <= rating ? '⭐' : '☆'}
                </Text>
              ))}
            </View>
          </View>

          {/* New Section for Badge */}
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>New</Text>
          </View>
        </View>
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
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  blueRectangle: {
    width: '100%',
    height: 300, 
    backgroundColor: 'rgba(19, 65, 105, 1)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
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
    marginTop: 30,
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
  name: {
    marginTop: 5,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  ratingContainer: {
    flex:1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  ratingColumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingStars: {
    color: '#FFD700',
    fontSize: 20,
  },
  ratingValue: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 15,
  },
  badgeContainer: {
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  menuIcon: {
    justifyContent: 'flex-start',
    position: 'absolute',
   top: -20,
    right: -110,
  },
});

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;
