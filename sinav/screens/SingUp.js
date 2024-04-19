import { View, Text,TouchableOpacity, KeyboardAvoidingView, ScrollView, Pressable,TextInput, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SingUp = ({}) => {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');



    const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://fakestoreapi.com/users', {
        gender,
        name,
        password,
        email,
        birthDate
      });
      navigation.navigate('Kvkk');
    } catch (error) {
      console.error(error);
    }
  };

  
  const navigation = useNavigation();


  return (
    <SafeAreaView className='mr-4'>
      <KeyboardAvoidingView behavior='padding' position='relative'> 
        <ScrollView>
      <View className='items-center'>      
        <View className=' flex flex-col w-[60%]'>
            <View className='flex-1 '>
            <Text className='self-start mt-8' style={{fontFamily:'Comfortaa'}}>Cinsiyetinizi seçin</Text>
            <View className='flex-1 flex-row gap-5 mt-1'>
                <Pressable onPress={()=>setGender("Kadın")} className='bg-white w-[45%] h-[40px] justify-center rounded-lg'><Text className='text-center' style={{fontFamily:'Comfortaa'}}>Kadın</Text></Pressable>
                <Pressable onPress={()=>setGender("Erkek")}  className='bg-white w-[45%] h-[40px] justify-center rounded-lg'><Text className=' text-center' style={{fontFamily:'Comfortaa'}}>Erkek</Text></Pressable>
            </View>
            </View>

            <View className='items-center flex-1 w-[245px] mb-2 mt-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>E mail</Text>
        <TextInput onChangeText={setEmail} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        </View>

            <View className='items-center flex-1 w-[245px] mb-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Nickname</Text>
        <TextInput onChangeText={setName} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <Text className='self-start p-1' style={{fontFamily:'Comfortaa', fontSize:10}}>Gizliliğinize önem veriyoruz. Lütfen ad soyad girmeden nickname oluşturunuz.</Text>
        </View>

        <View className='items-center flex-1 w-[245px] mb-2'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Şifre</Text>
       
        <View className='flex-row'>
        <TextInput  secureTextEntry={secureTextEntry} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        <TouchableOpacity className='absolute right-1' onPress={toggleSecureEntry} style={{ padding: 10 }}>
        <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
      </TouchableOpacity>
        </View>
        </View>

        <View className='items-center flex-1 w-[245px] mb-[5%]'>
        <Text className='self-start mb-2' style={{fontFamily:'Comfortaa', fontSize:12}}>Doğum Tarihi</Text>
       
        <View className='flex-row'>
        <TextInput onChangeText={setBirthDate} className='bg-white rounded-md w-[245px] h-[40px] p-2'/>
        
        </View>
        </View>

        <View className='items-center flex-1 w-[245px] '>
        <TouchableOpacity onPress={handleSignup} className='bg-[#0300a3] rounded-3xl w-[70%]'>
        <Text className='text-white text-2xl p-2 text-center'>İlerle</Text>
        </TouchableOpacity>
            <View className='flex-row mt-1'>
                <Text style={{fontFamily:'Comfortaa', fontSize: 10 }}>Hesabınız var mı?</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Carouselt')}>
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