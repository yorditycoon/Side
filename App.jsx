import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './app/splashscreen';
import Signup from './app/Signup';
import Login from './app/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
