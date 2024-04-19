import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'



const Modal = ({score}) => {
const navigation = useNavigation();

  return (
    <View>
        <View>
      <Text>
        Test bitti. Skorunuz: {score}
      </Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Hello')}>
            <Text>Ana menüye dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Modal