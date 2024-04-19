import { View, Text, SafeAreaView, ImageBackground, styles, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Hello = () => {

  const navigation = useNavigation();

    
        const image = require('../images/foto.png')
  return (
    <SafeAreaView className='h-full w-full'>
      <ImageBackground source={image}>
            <View className='h-screen'>
            
      
      <LinearGradient
    colors={[ '#00000000','rgba(255,255,255,1)' ,'rgba(255,255,255,1)']}
    style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '70%',
       

    }}
/>
<View className=' w-full absolute bottom-24 items-center flex flex-col '>
<View>
<Text className=' bottom-11 text-center' style={{fontFamily:'Comfortaa', fontSize:15}}>Merhaba Kullanıcı adı</Text>
</View>
<View>
    <Pressable onPress={()=>navigation.navigate('Quiz')} className='bg-[#0300a3] rounded-2xl px-3 w-36 '><Text className='py-2 text-white text-center' style={{fontFamily:'Comfortaa'}}>Ankete Başla</Text></Pressable>
</View>
</View>

</View>
    


            
      </ImageBackground>
    </SafeAreaView>
  )
}


    


export default Hello