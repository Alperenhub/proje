import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const QuestionCard = ({questionData, score, setScore, count, setCount, modal, setModal}) => {
 
    const [timer, setTimer] = useState(30)

    const approvedChoice = (selectedAnswer) => {
        const checkAnswer = selectedAnswer === questionData[count]?.correct_answer;
        if (checkAnswer) {
            setScore(score + 100);
        }
        setCount(count + 1);
        if(count ==9){
            setModal(true);
            setTimer(30)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(timer>0){
               setTimer(timer-1) 
            }
            if(timer==0 && count<10){
                setCount(count+1)
                setTimer(30)
            }else if(count >= 10){
                setModal(true)
            }
            
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[timer,count,setCount])


    return (
   
   <View className='max-w-[90%] w-[70%]'>
    <View className='w-11 h-11 bg-slate-400 items-center justify-center rounded-full mb-5'>
        <Text style={{fontFamily:'Comfortaa', fontSize: 15 }}>{timer}</Text>
    </View>
    <View className=' mb-8'>
    <Text style={{fontFamily:'Comfortaa', fontSize: 15 }} className='text-2xl font-bold'> {count+1}/10 - {questionData[count]?.question} </Text> 
    </View>
    
    <View className='items-center'>
    {
        questionData[count]?.answers?.map((answer,i)=>(
            <TouchableOpacity
            className='bg-gray-400 active:bg-gray-600 w-[100px] rounded-lg my-1 h-14 justify-center'
            onPress={approvedChoice(answer)}
            key={i}
            value={answer}
            >
              <Text className='text-center' style={{fontFamily:'Comfortaa', fontSize: 15 }}>{answer}</Text>  
            </TouchableOpacity>
        ))
    }
    </View>

    </View>
  )
}

export default QuestionCard