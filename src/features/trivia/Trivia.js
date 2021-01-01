import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectTrivia, setTrivia } from "./triviaSlice"
import { getTrivia } from "../../services/Trivia"

export default function Trivia() {

    const trivia = useSelector(selectTrivia);
    const dispatch = useDispatch();


    function getAnotherTrivia() {
        getTrivia().then(question => {
            let triviaArray = []
            triviaArray.push(atob(question.question),atob(question.correct_answer),atob(question.incorrect_answers[0]),atob(question.incorrect_answers[1]),atob(question.incorrect_answers[2]))
            dispatch(setTrivia(triviaArray))
        });
    }


    useEffect(() => {
        getTrivia().then(question => {
            let triviaArray = []
            triviaArray.push(atob(question.question),atob(question.correct_answer),atob(question.incorrect_answers[0]),atob(question.incorrect_answers[1]),atob(question.incorrect_answers[2]))
            dispatch(setTrivia(triviaArray))
        });
      }, []);


  
    return (
        // Gamescreen layout
        <div className="h-screen flex justify-center items-center bg-gray-900">

            <div className="h-1/3 flex flex-col justify-between bg-gray-800 shadow-lg py-6 px-6 rounded">

                {/* Question */}
                <div>
                    <h1 className="font-bold mb-2 text-4xl text-gray-300">{trivia[0]}</h1>
                
                   
                </div>

            
                {/* Answers button group */}
                <div>
                    {/* Answers AB */}
                    <div className="flex justify-between mb-6">
                        <button className="bg-indigo-600 py-4 px-8 w-1/2 mr-4 rounded text-white hover:bg-indigo-700 shadow-lg"><span className="text-yellow-500 font-bold mr-2">A:</span>{trivia[1]}</button>
                        <button className="bg-indigo-600 py-4 px-8 w-1/2 rounded text-white hover:bg-indigo-700 shadow-lg"><span className="text-yellow-500 font-bold mr-2">B:</span>{trivia[2]}</button>
                    </div>


                    {/* Answers CD */}
                    <div className="flex justify-between">
                    <button className="bg-indigo-600 py-4 px-8 w-1/2 mr-4 rounded text-white hover:bg-indigo-700 shadow-lg"><span className="text-yellow-500 font-bold mr-2">C:</span>{trivia[3]}</button>
                    <button className="bg-indigo-600 py-4 px-8 w-1/2 rounded text-white hover:bg-indigo-700 shadow-lg"><span className="text-yellow-500 font-bold mr-2">D:</span>{trivia[4]}</button>
                    </div>
                </div>


                <button className="bg-gray-600 py-4 px-8 w-full mt-4 rounded text-white hover:bg-gray-700 shadow-lg" onClick={getAnotherTrivia}>Get another</button>

            </div>




        </div>
 
    )
}
