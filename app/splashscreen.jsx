import * as React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import App from '../App';

const SplashScreen = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    // Automatically navigate to Login screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Add your splash screen content here */}
      <Image 
        source={require('../assets/images/side-logo.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Or any color you prefer
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;