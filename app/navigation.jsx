import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Splashscreen';
import Signup from './Signup';
import Login from './Login';
import CompanyForm from './companyform';
import PrivacyPolicy from './privacyPolicy';
import WorkerForm from './workerForm';



const Stack = createStackNavigator();

function navigation() {
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
                    name="PrivacyPolicy" 
                    component={PrivacyPolicy} 
                    options={{ title: 'Privacy Policy' }}
                />
                <Stack.Screen 
                    name="WorkerForm" 
                    component={WorkerForm}
                    options={{ title: 'Worker Registration' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;
