
import React, { useRef, useState} from 'react';
import {
  Button,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Text} from 'react-native';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Login from './Login';
import SingUp from './SingUp';

const Carouselt = () => {


  const _carousel = useRef();

  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const data = [
    {
      id: 0,
      title: 'Login',
      description:(
        
        <Login/>
    
      )
        
    },
    {
      id: 1,
      title: 'Pay Seamlessly',
      description:
        <SingUp/>,
    },
    {
      id: 2,
      title: 'Track Order',
      description: 
      <SingUp/>,
    },
    {
        id: 3,
        title: 'Başka işler',
        description: 
        <SingUp/>,
      },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <View >
        
        <View className='bg-white mt-48 h-[80%] rounded-t-3xl' >
          <Text style={{fontSize: 18, fontWeight: '700'}}>{item.title}</Text>
          <View className='w-full'>{item.description}</View>
        </View>
      </View>
    );
  };

  return (
    // style={{flex: 1}}
    <SafeAreaView className=''>   
      
      <Carousel
        ref={_carousel}
        data={data}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={index => setActiveDotIndex(index)}
      />
      <View className=' items-center' style={{ justifyContent: 'space-between'}}>
        
        <Pagination 
          carouselRef={_carousel}
          activeDotIndex={activeDotIndex}
          dotsLength={4}
          dotStyle={{
            width: 15,
            backgroundColor: 'orange',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 10,
            backgroundColor: 'gray',
          }}
        />
        {/* <View style={{padding: 15, flexDirection: 'row'}}>
          <TouchableWithoutFeedback
            onPress={() => {
              _carousel.current.snapToItem(activeDotIndex - 1);
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: 'lightgray',
                marginEnd: 10,
              }}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              _carousel.current.snapToItem(activeDotIndex + 1);
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: 'orange',
              }}
            />
          </TouchableWithoutFeedback>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Carouselt;