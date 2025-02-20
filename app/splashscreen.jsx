import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Signup');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
        
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/Group 38.png")}
                style={styles.image}
                accessibilityLabel="App splash screen"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        marginTop: 80,
        alignSelf: 'center',
    },
});

export default SplashScreen;
