import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import * as api from '../api/Api'
import QuestionCard from '../components/questionCard/QuestionCard'
import Modal from '../components/modal/Modal'
import Loading from '../components/loading/Loading'


const Quiz = () => {

    const route = useRoute();
    const { amount } = route.params;

    const [questionData, setQuestiondata] = useState([])
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true) 

    useEffect(()=>{
        const getData = async()=>{
            const data = await api.fetchQuizData(amount)
            setQuestiondata(data)
            setLoading(false) 
        }
        getData();
    },[amount])
    
    useEffect(() => {
        if (!modal) {
            setScore(0);
            setCount(0);
        }
    }, [modal])



    return (
        <View className='w-full h-full flex items-center justify-center'>
            {loading ? ( 
                 <Loading/> 
            ) : (
                modal ? <Modal 
                    score={score}
                /> :
                <>
                    <Text style={{ fontFamily: 'Comfortaa', fontSize: 15 }}>Quiz </Text>
                    <QuestionCard
                        questionData={questionData}
                        score={score}
                        setScore={setScore}
                        count={count}
                        setCount={setCount}
                        setModal={setModal}
                    />
                </>
            )}
        </View>
    )
}

export default Quiz
