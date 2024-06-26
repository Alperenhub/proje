

const shuffleArray = (array) =>{
    return [...array].sort(()=>Math.random() - 0.5)
}

export const fetchQuizData = async(amount) => {

    const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple`
    const data = await (await fetch(url)).json();
    return data.results.map((dt)=>({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answers])
    }))
}