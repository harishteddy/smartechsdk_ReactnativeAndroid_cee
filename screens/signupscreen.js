import { View, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'

const Signupscreen = () => {

  const [email,setEmail] = useState('');
  const [Mobile,setMobile] = useState('');
  console.log("email",email)
  console.log("email",Mobile)
  
  return (
    <View style={styles.SectionStyle}>

     <Text style={styles.textStyle}>
        Register Here
      </Text>

      <TextInput style={styles.inputStyle}
      placeholder="Email"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="email-address"
      onChangeText={inputemail=>{
      setEmail(inputemail);
    }}>

      </TextInput>

      <TextInput style={styles.inputStyle}
      placeholder="Mobile"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="number-pad"
      onChangeText={inputmobile=>{
      setMobile(inputmobile);
    }}>

      </TextInput>
      <TextInput style={styles.inputStyle}
      placeholder="First Name"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={inputmobile=>{
      setMobile(inputmobile);
    }}>

      </TextInput>
      <TextInput style={styles.inputStyle}
      placeholder="Last Name"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={inputfirstname=>{
      setMobile(inputfirstname);
    }}>
   </TextInput>

   <TouchableOpacity 
   style={styles.buttonStyle}
    activeOpacity={0.5}
    onPress={() => {
      console.log('pressed')
      alert('Registered successfully')
    }}
   >
    <Text style={styles.buttonTextStyle}>Register</Text>

   </TouchableOpacity>
   </View>
   
  )
}

const styles = StyleSheet.create({
 
  textStyle:{
    marginTop:60,
    height:50,
    width:100,
    alignSelf:'center',
    color:'red'
    
  },

  SectionStyle: {
    flexDirection: 'column',
     height: 34,
    marginTop: 120,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    color: 'green',
  },buttonStyle: {
    backgroundColor: '#0000cc',
    borderWidth: 0,
    color: '#FFFFFF',
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
   inputStyle: {
     color: 'green',
    marginTop:20,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    width:'95%',
    height:50,
    borderColor: '#cc8800',
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    }
  

});


export default Signupscreen