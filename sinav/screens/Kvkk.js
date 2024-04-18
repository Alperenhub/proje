import { View, Text, SafeAreaView, Switch, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Kvkk = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView className='p-2'>
        <View className='flex items-center '>
          <View className='flex-col mr-[10%] ml-[10%] space-y-2'>  
            <View className='flex-1 flex-col mt-5'>
            <Text className='text-center' style={{fontFamily:'Comfortaa', fontSize:15}}>Hassas veriler hakkında</Text>
            

            <View className='mt-2'>
                <Text className='text-center self-center' style={{fontFamily:'Comfortaa', fontSize:10}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's
                </Text>
            </View>
            </View>
            <View className='flex flex-[3] flex-col justify-around'>
                <View>
                <View className='flex flex-row'>
                <View className='flex-[2]'>
                    <Switch
                    trackColor={{false: '#767577', true: '#0300a3'}}
                    thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                <View className='flex-[8] h-[70px]'>
                    <ScrollView>
                        <Text style={{fontFamily:'Comfortaa', fontSize:11}}>
                    *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    </Text>
                    </ScrollView>
                    <Text className='font-bold' style={{fontFamily:'Comfortaa', fontSize:10}}>Kabul ediyorum:</Text>
                </View>
                </View>
                
            </View>

            <View className='flex  '>
                <View className='flex flex-row'>
                <View className='flex-[2]'>
                    <Switch
                    trackColor={{false: '#767577', true: '#0300a3'}}
                    thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                <View className='flex-[8] h-[50px]'>
                    <ScrollView>
                        <Text style={{fontFamily:'Comfortaa', fontSize:11}}>
                    *Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat 
                    </Text>
                    </ScrollView>
                    <Text className='font-bold' style={{fontFamily:'Comfortaa', fontSize:10}}>Kabul ediyorum:</Text>
                </View>
                </View>
                
            </View>

            <View className='flex  '>
                <View className='flex flex-row'>
                <View className='flex-[2]'>
                    <Switch
                    trackColor={{false: '#767577', true: '#0300a3'}}
                    thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                <View className='flex-[8] h-[70px]'>
                    <ScrollView>
                        <Text style={{fontFamily:'Comfortaa', fontSize:11}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Text>
                    </ScrollView>
                    <Text className='font-bold' style={{fontFamily:'Comfortaa', fontSize:10}}>Kabul ediyorum:</Text>
                </View>
                </View>
                </View>
            </View>

            <View className='items-center flex-[2] w-[245px] ml-2'>
        <TouchableOpacity className='bg-[#0300a3] rounded-3xl w-[70%]'>
        <Text className='text-white text-2xl p-2 text-center'>İlerle</Text>
        </TouchableOpacity>
            </View>
          </View>  
        </View>
    </SafeAreaView>
  )
}

export default Kvkk