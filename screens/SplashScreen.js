import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useEffect} from 'react'

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
   
        setTimeout(() => {
            navigation.navigate("loginscreen")
        }, 1000);
    },[])
    
  return (
    <View style={{flex: 1}}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <Image style={styles.imageStyle}
                    source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4y0icgKJ68h2HxLjzpbnse55DYk7J10jNcuh4DkqVEA&s'
                    }} 
                    />
      </View>
    </View>
  )
}

export default SplashScreen
const styles = StyleSheet.create({

    imageStyle: {
        height:"60%",width:"100%"
    }
});