import React, { createContext, useContext, useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './splashscreen';
import Signup from './Signup';
import Login from './Login';
import CompanyForm from './companyform';
import WorkerForm from './workerForm';
import PrivacyPolicy from './privacyPolicy'; // Import the PrivacyPolicy component



const AuthContext = createContext();

const Stack = createStackNavigator();

function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = React.useMemo(() => ({
    signIn: async (token) => {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    },
    signOut: async () => {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    },
  }), []);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let token = null;
      try {
        token = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error('Restoring token failed', e);
      }
      setUserToken(token);
      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  if (isLoading) {
    return null; // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
}

function AppNavigation() {
  const { userToken } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    cardStyle: { backgroundColor: '#fff' }
                }}
            >
                <Stack.Screen 
                    name="Splash" 
                    component={SplashScreen} 
                    options={{ gestureEnabled: false }}
                />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen 
                    name="CompanyForm" component={CompanyForm} 
                    options={{ title: 'Company Registration' }}
                />
                <Stack.Screen 
                    name="WorkerForm" 
                    component={WorkerForm} 
                    options={{ title: 'Worker Registration' }}
                />
                <Stack.Screen 
                    name="PrivacyPolicy" // Add the PrivacyPolicy screen
                    component={PrivacyPolicy} 
                    options={{ title: 'Privacy Policy' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
