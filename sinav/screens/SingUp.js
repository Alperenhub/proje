import { View, Text,TouchableOpacity, KeyboardAvoidingView, ScrollView, Pressable,TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const SingUp = () => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView className='mr-4'>
      <KeyboardAvoidingView behavior='padding' position='relative'> 
        <ScrollView>
      <View className='items-center'>      
        <View className=' flex flex-col w-[60%]'>
            <View className='flex-1 '>
            <Text className='self-start mt-8' style={{fontFamily:'Comfortaa'}}>Cinsiyetinizi seçin</Text>
            <View className='flex-1 flex-row gap-5 mt-1'>
                <Pressable  className='bg-white w-[45%] h-[40px] justify-center rounded-lg'><Text className='text-center' style={{fontFamily:'Comfortaa'}}>Kadın</Text></Pressable>
                <Pressable  className='bg-white w-[45%] h-[40px] justify-center rounded-lg'><Text className=' text-center' style={{fontFamily:'Comfortaa'}}>Erkek</Text></Pressable>
            </View>
            </View>

            <View className='items-center flex-1 w-[245px] mb-2 mt-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>E mail</Text>
        <TextInput className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        </View>

            <View className='items-center flex-1 w-[245px] mb-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Nickname</Text>
        <TextInput className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <Text className='self-start p-1' style={{fontFamily:'Comfortaa', fontSize:10}}>Gizliliğinize önem veriyoruz. Lütfen ad soyad girmeden nickname oluşturunuz.</Text>
        </View>

        <View className='items-center flex-1 w-[245px] mb-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Şifre</Text>
       
        <View className='flex-row'>
        <TextInput secureTextEntry={secureTextEntry} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <TouchableOpacity className='absolute right-1' onPress={toggleSecureEntry} style={{ padding: 10 }}>
        <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
      </TouchableOpacity>
        </View>
        </View>

        <View className='items-center flex-1 w-[245px] mb-[5%]'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Doğum Tarihi</Text>
       
        <View className='flex-row'>
        <TextInput secureTextEntry={secureTextEntry} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        
        </View>
        </View>

        <View className='items-center flex-1 w-[245px] '>
        <TouchableOpacity className='bg-[#0300a3] rounded-3xl w-[70%]'>
        <Text className='text-white text-2xl p-2 text-center'>İlerle</Text>
        </TouchableOpacity>
            <View className='flex-row mt-1'>
                <Text style={{fontFamily:'Comfortaa', fontSize: 10 }}>Hesabınız var mı?</Text>
                    <TouchableOpacity>
                <Text style={{ color: '#0300a3',fontFamily:'Comfortaa', fontSize: 10, marginLeft: 5 }}>İlerle</Text>
                    </TouchableOpacity>
            </View>
        </View>


        </View>
      </View>     
        </ScrollView>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default SingUp