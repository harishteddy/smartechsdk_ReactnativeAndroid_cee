import { View, Text, TextInput,StyleSheet,TouchableOpacity } from 'react-native'
import React ,{useState}from 'react'

const Signupscreen = () => {

  const [email,setEmail] = useState('');
  const [Mobile,setMobile] = useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  console.log("email",email)
  console.log("email",Mobile)
  console.log("email",password)
  console.log("email",confirmPassword)
  
  
  return (
    <View style={styles.SectionStyle}>

     <Text style={styles.textStyle}>
        Register Here
      </Text>

      <TextInput style={styles.inputStyle}
      placeholder="Enter Email"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="email-address"
      onChangeText={inputemail=>{
      setEmail(inputemail);
    }}>
    </TextInput>

      <TextInput style={styles.inputStyle}
      placeholder="Enter Mobile Number"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="number-pad"
      onChangeText={inputmobile=>{
      setMobile(inputmobile);
    }}>

      </TextInput>
      <TextInput style={styles.inputStyle}
      placeholder="Enter Password"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={password=>{
        setPassword(password);
    }}>

      </TextInput>
      <TextInput style={styles.inputStyle}
      placeholder="Enter Confirm Password"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={confirmPassword=>{
        setConfirmPassword(confirmPassword);
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
   
    marginTop:40,
    height:50,
    width:200,
    alignSelf:'center',
    color:'#FF7900',
    fontSize:30
    
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
    backgroundColor: '#FF7900',
    borderWidth: 0.5,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
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