/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
  Image
} from 'react-native';


const Loginscreen = ({navigation}) =>  {
 const [email,setemail] = useState('');
console.log('userLogin success',email);
const showbutton=()=>{
  ToastAndroid.show(
    '"User Identity Is Set successfully"',
    ToastAndroid.LONG,
    );
 navigation.navigate('signupscreen');
  //ToastAndroid.show(`"userLogin success",${email}`, ToastAndroid.LONG);
  console.log('userLogin success',email);
};

  return (
    <View>
      <View style={styles.container}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y0icgKJ68h2HxLjzpbnse55DYk7J10jNcuh4DkqVEA&s'
                    }} 
                    />
                    </View>
    <View style={styles.textstyle}>
    <Text >  Hello Harish</Text>
      </View>                
    
   <View style={styles.SectionStyle}>

    <TextInput style={styles.inputStyle}
      placeholder="Email"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="email-address"
      onChangeText={inputemail=>{
      setemail(inputemail);
    }} />
    </View>
    <TouchableOpacity style={{height: 50, width: 150, borderRadius: 10,alignSelf:'center',backgroundColor:'#0000cc',marginTop:20 }}
    onPress={() =>{showbutton()}
}
              >

    <Text style={styles.textstyle}>
        Press Here
       </Text>
    </TouchableOpacity>
    </View>
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
    flex: 1,
    color: 'green',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 30,
    width:'85%',
    height:50,
    borderColor: '#cc8800',
    },
  SectionStyle: {
    flexDirection: 'row',
    height: 34,
    marginTop: 50,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    color: 'green',
  },
  container: {
    alignItems: 'center',
    marginTop: 50,
},
textstyle:{
  color: 'pink',
  justifyContent:'center',
  alignSelf:'center',
   marginTop:10 ,
  
}
});

export default Loginscreen;
