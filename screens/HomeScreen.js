import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ToastAndroid, NativeModule} from 'react-native';

import Smartech from 'smartech-reactnative-module';
import SmartechSDK from 'smartech-reactnative-module';

 var count =0;
const HomeScreen = ({navigation}) => {

console.log("smartech sdk json",SmartechSDK)



  const payloadata = {
           NAME: "Harish Reddy",
           EMAILID: "abc@xyz.com",
           MOBILE: "4545748454"
  };
  
  // Sample code for reference purpose only
  const payloadata2 = {
  name: "Galaxy",
  description: "20gram bars",
  payload_id: "1",
  event_id:21
};
SmartechSDK.trackEvent("Harish", payloadata);

     const setUser = () => {
     Smartech.setUserIdentity('123@gmail.com');
     console.log("setting Identity");
    ToastAndroid.show(`"User Identity Is Set successfully"`, ToastAndroid.LONG);
  }

  const getUser = () => {
  
      Smartech.getUserIdentity()
       count++;
      console.log(Smartech.getUserIdentity(),count);
  }

  const logout = () => {
     navigation.navigate('loginscreen')
    console.log("logutett"); 
  }

  const clerUser = () => {
    Smartech.clearUserIdentity()
    ToastAndroid.show(`"User Identity Is Clear"`, ToastAndroid.LONG);
    console.log(Smartech.clearUserIdentity());  
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16, alignContent: 'center'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
              color:'#FF7900',
              fontWeight:"500"
              
            }}>
            Smartech React Native SDk
            {'\n\n'}
            User And Events Tracking
          </Text>

          <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {
                console.log('pressed')
                SmartechSDK.updateUserProfile(payloadata)
                
               SmartechSDK.trackEvent("Page Browse", payloadata2);
            
                console.log("payloads");
  
            }}
              >
              <Text style={styles.buttonTextStyle}>PAYLOAD</Text>
            </TouchableOpacity>

           

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {getUser()}}
              >
              <Text style={styles.buttonTextStyle}>GET USER IDENTITY</Text>
            </TouchableOpacity>



            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {setUser()}}
              >
              <Text style={styles.buttonTextStyle}>SET USER IDENTITY</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => {clerUser(), logout()}}
              >
              <Text style={styles.buttonTextStyle}>LOGOUT</Text>
            </TouchableOpacity>


            
        </View>
        
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#FF7900',
        borderWidth: 0,
        color: '#FF7900',
        borderColor: '#7DE24E',
        height: 40,
        width: 200,
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
      }
})
 
export default HomeScreen;