import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Loginscreen from './screens/Loginscreen';
import Signupscreen from './screens/signupscreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* //<Text>App</Text> */}
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginscreen" component={Loginscreen} />
        <Stack.Screen name="signupscreen" component={Signupscreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
    </View>
  )
}

export default App