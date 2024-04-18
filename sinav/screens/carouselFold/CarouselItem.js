import { View, Text,SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Carouselt from '../Carousel'

const CarouselItem = () => {
  const image = require('../../images/foto.png')
  return (
    <SafeAreaView className='h-screen bg-slate-500'>
      <ImageBackground source={image}>
      <Carouselt/>
    
    </ImageBackground>
    </SafeAreaView>
  )
}

export default CarouselItem