import { View, Text, TextInput,StyleSheet,TouchableOpacity, ScrollView } from 'react-native'
import React ,{useState}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

let isvalid = true;
const Signupscreen = ({navigation}) => {

  const [email,setEmail] = useState('');
  const [Mobile,setMobile] = useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
  const[badEmail,setBadEmail]=useState(false);
  const[badMobile,setBadMobile]=useState(false);
  const[badPassword,setBadPassword]=useState(false);
  const[badConfirmPassword,setBadConfirmPassword]=useState(false);
  const[buttonDisabled,setButtonDisabled]=useState(false);
const validate=()=>{
  setButtonDisabled(true)
  if(email==''){
   setBadEmail(true)
   setButtonDisabled(false)
  }else{
setBadEmail(false)
  }
  if(Mobile==''){
    setBadMobile(true)
    setButtonDisabled(false)
  }
  else{
    setBadMobile(false)
    }
 if(password==''){
   setBadPassword(true)
   setButtonDisabled(false)
  }else{
    setBadPassword(false)
   }
  if(confirmPassword==''){
    setBadConfirmPassword(true)
    setButtonDisabled(false)
  }else{
    setBadConfirmPassword(false)
  }
  if(password!==confirmPassword){
    setBadConfirmPassword(true)
    setButtonDisabled(false)
  }else{
    setBadConfirmPassword(false)
  }
  setTimeout(()=>{

    if(isvalid==true)
    {
     saveData();
    }else{
     setButtonDisabled(false);
    }
    },2000);
  
}
const saveData=async()=>{
  
    await AsyncStorage.setItem('EMAIL',email);
    await AsyncStorage.setItem('Mobile',Mobile);
    await AsyncStorage.setItem('PASSWORD',password);
    await AsyncStorage.setItem('CONFIRMPASSWORD',confirmPassword);
    if(email==''&& Mobile==''&& password==''&&confirmPassword=='')
    {
      alert('Enter Register Details' )
    }else{
      navigation.navigate('loginscreen');
    }
    
 }

    
  
  return (
    <ScrollView style={{flex:1}}>
   
    <View style={{flex:1,marginTop:100}}>
       

     <Text style={styles.textStyle}>
        Register Here
      </Text>

      <TextInput 
      style={styles.inputStyle}
      placeholder="Enter Email"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="email-address"
      onChangeText={inputemail=>{
      setEmail(inputemail);
       }}>
    </TextInput>

     
    { badEmail===true &&(<Text
    style={{marginTop:10,marginLeft:30,color:'red'}}> 
     Please Enter Emaild Id</Text>)
    }

    <TextInput style={styles.inputStyle}
      placeholder="Enter Mobile Number"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="number-pad"
      onChangeText={inputmobile=>{
      setMobile(inputmobile);
    }}>
   </TextInput>

  { badMobile===true &&(<Text
   style={{marginTop:10,marginLeft:30,color:'red'}}> 
     Please Enter Mobile Number</Text>)
  }
 <TextInput style={styles.inputStyle}
      placeholder="Enter Password"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={password=>{
        setPassword(password);
    }}>
     
 </TextInput>


  { badPassword===true &&(<Text
  style={{marginTop:10,marginLeft:30,color:'red'}}> 
  Please Enter Password</Text>)
  }
 <TextInput style={styles.inputStyle}
      placeholder="Enter Confirm Password"
      placeholderTextColor={'#8b9cb5'}
      keyboardType="numbers-and-punctuation"
      onChangeText={confirmPassword=>{
        setConfirmPassword(confirmPassword);
    }}>
  </TextInput>

{ badConfirmPassword===true &&(<Text
 style={{marginTop:10,marginLeft:30,color:'red'}}> 
 Please Enter Correct Password</Text>)
}

<TouchableOpacity 
  backgroundColor={buttonDisabled?'#8e8e8e':'#FF7900'}
   style={styles.buttonStyle}
    // activeOpacity={0.5}
    onPress={() => {
      validate()
      // console.log('pressed')
      // alert('Registered successfully')
    }}
    disabled={buttonDisabled}
  >
<Text style={styles.buttonTextStyle}>Register</Text>
</TouchableOpacity>
 </View>
</ScrollView>
  )
}

const styles = StyleSheet.create({
   textStyle:{
    height:50,
    width:200,
    alignSelf:'center',
    color:'#FF7900',
    fontSize:30 
  },
  SectionStyle: {
    flex:1,
     height: 34,
    marginTop: 50,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    color: 'green',
  },
  buttonStyle: {
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
    marginTop: 50,
   },
   inputStyle: {
    color: 'green',
    marginTop:30,
    paddingLeft: 35,
    paddingRight: 15,
    borderWidth: 0.5,
    borderRadius: 20,
    width:'85%',
    height:50,
    borderColor: '#cc8800',
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    }});
export default Signupscreen