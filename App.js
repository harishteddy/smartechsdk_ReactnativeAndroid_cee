import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/signupscreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import Smartech from 'smartech-reactnative-module';

const Stack = createStackNavigator();
const App = () => {
  // useEffect(() => {

  //   console.log('UseEffect App Loaded........');
   
  //   const handleDeeplinkWithPayload = (deeplinkdata) => {
  //   console.log('handleDeeplinkWithPayload ----- ', deeplinkdata);
  //   };
  //   Smartech.addListener(Smartech.SmartechDeeplinkNotification, handleDeeplinkWithPayload);
  //   Smartech.getDeepLinkUrl(function (_response) {
  //   console.log('getDeepLinkUrl Initial Deeplink Response ', _response);
  //   // Handling the SDK Deeplink Callback.
  //   });
   
   
  //   }, []);





  return (
    <View style={{flex: 1}}>
      {/* //<Text>App</Text> */}
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="splasshscreen" component={SplashScreen} />
        <Stack.Screen name="loginscreen" component={Loginscreen} />
       <Stack.Screen name="signupscreen" component={Signupscreen} />
       <Stack.Screen name="homescreen" component={HomeScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>

    
    </View>
  )
}

export default App