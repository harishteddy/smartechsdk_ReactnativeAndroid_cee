/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from 'react';
import Smartech from 'smartech-reactnative-module';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Image,
  ScrollView
} from 'react-native';


const Loginscreen = ({navigation}) =>  {

  const [deeplinkresponse,setDeeplinkResponse] = useState('');
  useEffect(() => {

    console.log('UseEffect App Loaded........');
   
    const handleDeeplinkWithPayload = (deeplinkdata) => {
    console.log('handleDeeplinkWithPayload ----- ', deeplinkdata);
    };
    Smartech.addListener(Smartech.SmartechDeeplinkNotification, handleDeeplinkWithPayload);
    Smartech.getDeepLinkUrl(function (_response) {
    console.log('getDeepLinkUrl Initial Deeplink Response ', _response);
    setDeeplinkResponse(_response)
    alert(_response)
    if(deeplinkresponse==='https://www.google.com'){
      showbutton()
      alert('yes')
    }else{
      console.log('No Deeplink Response ')
    }
    
    // Handling the SDK Deeplink Callback.
    }); 
    }, []);





 const [email,setemail] = useState('');
 const[password,setPassword]=useState('');
 const[badEmail,setBadEmail]=useState(false);
 const[badPassword,setBadPassword]=useState(false);
//console.log('userLogin success',email);
const showbutton=()=>{
 navigation.navigate('signupscreen');
  //ToastAndroid.show(`"userLogin success",${email}`, ToastAndroid.LONG);
  //console.log('userLogin success',email);
};
const validate=()=>{
  if (email==''){
setBadEmail(true)
}else{
  setBadEmail(false)
 }
if(password==''){
    setBadPassword(true)
}else{
  setBadPassword(false)
}
getData()
}
const getData=async()=>{
  const mEmail=await AsyncStorage.getItem('EMAIL');
  const mPass=await AsyncStorage.getItem('PASSWORD');
  console.log('Test',mEmail,mPass);
  if(mEmail===email&&mPass===password){
    ToastAndroid.show(
    '"User Log in successfully"',
    ToastAndroid.LONG,
    );
    navigation.navigate('homescreen');
  }else{
    alert('Login details wrong');
  }}

  return (
    <ScrollView style={{flex:1}}>

    <View style={{flex:1}}>
      <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y0icgKJ68h2HxLjzpbnse55DYk7J10jNcuh4DkqVEA&s'
                    }} 
                    />
                    </View>
    <View style={styles.textstyle}>
    <Text style={{fontSize:24,fontWeight:'600',color:'#FF7900'}} >  Login Here</Text>
      </View>                
    
   <View style={styles.SectionStyle}>
    <TextInput 
     style={styles.inputStyle}
      placeholder="Enter Email"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="email-address"
      onChangeText={inputemail=>{
      setemail(inputemail);
    }} />
{ badEmail===true &&(<Text 
style={{marginTop:10,marginLeft:30,color:'red'}}>
   Please Enter Email id</Text>)
}
    <TextInput style={styles.inputStyle}
    placeholder="Enter Password"
    placeholderTextColor={'#8b9cb5'}
    keyboardType="email-address"
    onChangeText={inputPassword=>{
    setPassword(inputPassword);
  }} />

{ badPassword===true &&(<Text
 style={{marginTop:10,marginLeft:30,color:'red'}}> 
 Please Enter Password</Text>)
}
  
    </View>

    <TouchableOpacity 
    style={{height: 50, width: 150,
       borderRadius: 10,alignSelf:'center',
       backgroundColor:'#FF7900',marginTop:160 }}
    onPress={() =>{validate()}
           }
              >

    <Text style={styles.textstyle}>
        Login
       </Text>
    </TouchableOpacity>

    <Text style={styles.textstyle1} onPress={()=>{showbutton()}}>
        Create New Account?
       </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    marginLeft:35,
    color:'#dedrju1',
  },
  imageStyle: {
    height: 150,
    width: 150
},
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },  inputStyle: {
    color: 'green',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 30,
    marginTop:20,
    width:'85%',
    height:50,
    borderColor: '#cc8800',
    },
  SectionStyle: {
    flexDirection: 'column',
    height: 34,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    color: 'green',
  },
  container: {
    alignItems: 'center',
    marginTop: 50,
},

textstyle1:{
  color: '#FF7900',
  justifyContent:'center',
  alignSelf:'center',
  marginTop:10,
  fontSize:20,
  fontWeight:'800'
},
textstyle:{
  color: '#FFF',
  justifyContent:'center',
  alignSelf:'center',
  marginTop:10,
  fontSize:20,
  fontWeight:'800'
  
  
}
});

export default Loginscreen;
