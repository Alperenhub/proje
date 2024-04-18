import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
    
    const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  return (
   
    <SafeAreaView className='p-2 items-center'>
        <View className='flex flex-col '>
       <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" position="relative">
        
        <View className='items-center justify-center flex-1'>
        <Text style={{fontFamily:'Comfortaa', fontSize:20}}>Hoşgeldiniz</Text>
        </View>
        <ScrollView>
        <View className='items-center flex-1 w-[245px] mb-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Nickname</Text>
        <TextInput className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <Text className='self-start p-1' style={{fontFamily:'Comfortaa', fontSize:10}}>Gizliliğinize önem veriyoruz. Lütfen ad soyad girmeden nickname oluşturunuz.</Text>
        </View>

        <View className='items-center flex-1 w-[245px] mb-[15%]'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Şifre</Text>
       
        <View className='flex-row'>
        <TextInput secureTextEntry={secureTextEntry} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <TouchableOpacity className='absolute right-1' onPress={toggleSecureEntry} style={{ padding: 10 }}>
        <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
      </TouchableOpacity>
        </View>
       
        <Text className='self-end p-1 text-gray-400' style={{fontFamily:'Comfortaa', fontSize:10}}>Şifremi unuttum</Text>
        </View>

        <View className='items-center flex-[2] w-[245px]'>

            <TouchableOpacity className='bg-[#0300a3] rounded-3xl w-[70%]'>
                <Text className='text-white text-2xl p-2 text-center'>Giriş Yap</Text>
            </TouchableOpacity>
            <View className='flex-row mt-1'>
            <Text style={{fontFamily:'Comfortaa', fontSize: 10 }}>Üye değil misiniz?</Text>
            <TouchableOpacity>
            <Text style={{ color: '#0300a3',fontFamily:'Comfortaa', fontSize: 10, marginLeft: 5 }}>Hesap Oluştur.</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </View>
    </SafeAreaView>
  )
}

export default Login