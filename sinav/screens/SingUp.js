import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignUp = ({ setToken }) => {
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  
  const navigation = useNavigation();

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/users', {
        gender,
        name,
        password,
        email,
        birthDate
      });

      // Assuming the token is returned in the response
      const token = response.data.token;
      setToken(token); // Set token here

      navigation.navigate('Kvkk');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Comfortaa', fontSize: 20 }}>Hesap Oluştur</Text>
            <View style={{ width: '60%', marginTop: 20 }}>
              <Text style={{ fontFamily: 'Comfortaa', marginBottom: 5 }}>Cinsiyetinizi seçin</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => setGender("Kadın")} style={{ backgroundColor: 'white', width: '48%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Comfortaa' }}>Kadın</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGender("Erkek")} style={{ backgroundColor: 'white', width: '48%', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontFamily: 'Comfortaa' }}>Erkek</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TextInput onChangeText={setEmail} style={{ width: '60%', backgroundColor: 'white', borderRadius: 5, height: 40, marginBottom: 10, padding: 10 }} placeholder="E-mail" />
            <TextInput onChangeText={setName} style={{ width: '60%', backgroundColor: 'white', borderRadius: 5, height: 40, marginBottom: 10, padding: 10 }} placeholder="Nickname" />
            <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <TextInput onChangeText={setPassword} secureTextEntry={secureTextEntry} style={{ flex: 1, backgroundColor: 'white', borderRadius: 5, height: 40, padding: 10 }} placeholder="Şifre" />
              <TouchableOpacity onPress={toggleSecureEntry} style={{ padding: 10 }}>
                <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            <TextInput onChangeText={setBirthDate} style={{ width: '60%', backgroundColor: 'white', borderRadius: 5, height: 40, marginBottom: 20, padding: 10 }} placeholder="Doğum Tarihi" />
            <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: '#0300a3', borderRadius: 20, width: '60%', marginBottom: 20 }}>
              <Text style={{ fontFamily: 'Comfortaa', fontSize: 20, color: 'white', textAlign: 'center', padding: 10 }}>İlerle</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontFamily: 'Comfortaa', fontSize: 12 }}>Hesabınız var mı?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={{ fontFamily: 'Comfortaa', fontSize: 12, color: '#0300a3', marginLeft: 5 }}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
