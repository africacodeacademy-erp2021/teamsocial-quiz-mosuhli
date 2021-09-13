import React, {useState} from "react";

import NewGame from './NewGame';
import { questions } from "./Tech";

export default function GameSports() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [question, setQuestions] = useState(0);
    const [random, setRandom] = useState(questions);

    function shuffleArray(array:any){ 
        var num = array.length,
        temp,
        index;

      while(num > 0){
          index = Math.floor(Math.random() * num);
          num--;

          temp = array[num];
          array[num] = array[index];
          array[index] = temp;
      }
      return array;
    }


  function handleChange(event:any){
      const {value} = event.target;
      setQuestions(value);

      if(value == 5){
          shuffleArray(questions);
          questions.splice(5, 5);
          let temp = questions;
          setRandom(temp);
          console.log(random);
      }
      else{
          shuffleArray(questions);
          questions.splice(7, 3);
          let temp = questions;
          setRandom(temp);
          console.log(random);
      }
  }


    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if(isCorrect){
            setScore(score + 5);
            setTotal(50);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < random.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true);
        }
    };
    const data = JSON.stringify(localStorage.getItem("nickname"));
    const name = data.replace('"', '');
    const x = name.replace('"', '')

    return(
        
        <div className="app">
            
            {showScore ? (
                <div className='score-section'>
                    Hey! {x} You earned {score} points,  each question its valued 5 points on Tech Quiz <br/>
                    <div>
                        <NewGame/>
                    </div>
                </div>
            ) : (
                
                <>
                    <div className='question-section'>
                    <div>
                        <span key="{token}">Start Technology Quiz {x}</span>                   
                    </div>
                    <div>
                        <input id="five-questions" value={5} name="options" type="radio" onChange={handleChange}/> Five Question
                        <input id="seven-questions" value={7} name="options" type="radio" onChange={handleChange}/> Seven Question
                    </div>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>
                        </div>
                        <div className='question-text'>{random[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
						{random[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                </>
            )}
        </div>
    )
}