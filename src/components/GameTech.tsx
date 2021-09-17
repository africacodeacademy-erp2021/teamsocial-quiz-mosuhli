import React, {useState} from "react";
import { Link } from "react-router-dom";
import { questions } from "./Tech";

export default function GameSports() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [noQuestions, setNoQuestions] = useState(0);
    const [random, setRandom] = useState(questions);
    const [showQuestions, setShowQuestions] = useState(false);
    const [finalResults, setFinalResults] = useState("");
    const [showEmoji, setShowEmoji] = useState("");
    const total = noQuestions * 5;
    const pass = total / 2;

    function shuffleArray(array:any[]){ 
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
      setNoQuestions(value);

      if(value === 5){
          shuffleArray(questions);
          let temp = questions;
          setRandom(temp);
          setShowQuestions(true);
          console.log(random);
      }
      else{
          shuffleArray(questions);
          let temp = questions;
          setRandom(temp);
          setShowQuestions(true)
          console.log(random);
      }
  }



    const urlPass = "https://i.gifer.com/2DV.gif";
    const urlFail = "https://i.gifer.com/2Bz.gif";
    const badAnswer1 = "https://i.gifer.com/jPt.gif"
    const badAnswer2 = "https://i.gifer.com/5lS.gif";

    const goodAnswer1 = "https://i.gifer.com/3VQL.gif";
    const goodAnswer2 = "https://i.gifer.com/fxTf.gif";

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if(isCorrect){
            setScore(score + 5);
            setShowEmoji(goodAnswer1 || goodAnswer2);
            alert("Good Luck ");
        }else{
            setShowEmoji(badAnswer1 || badAnswer2);
            alert("Sorry! ")
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < noQuestions){
            setCurrentQuestion(nextQuestion);
        }else{
            if(score > pass ){
                setFinalResults("Passed")
            }else if(score === pass){
                setFinalResults("Passed")
                setShowEmoji(urlPass);
            }else {
                setFinalResults("Failed")
                setShowEmoji(urlFail);
            }
            setShowScore(true);
        }
    };
    const data = JSON.stringify(localStorage.getItem("nickname"));
    const name = data.replace('"', '');
    const x = name.replace('"', '')

    return(
        
        <div className="app">
            <div>
            <div>
                <span key="{token}">Start Technology Quiz {x}</span>                   
            </div>
            <div>
                    Your Score: {score}/{total}<br/>
            </div>
            <div>
                <input id="five-questions" value={5} name="options" type="radio" onChange={handleChange}/> Five Question
                <input id="seven-questions" value={7} name="options" type="radio" onChange={handleChange}/> Seven Question
            </div>
            </div>
            
            {showScore ? (
                <div className='score-section'>
                    Hey! {x} You {finalResults}, Your final Score: {score}/{total}, Note: each question its valued 5 points  <br/>
                    <div>
                    <button>
                        <Link to="/Category">New Game</Link>
                    </button>
                    </div>
                </div>
            ) : showQuestions ? (
                
                <>
                    <div className='question-section'>
                    
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
                    <img src={showEmoji} alt=""  />
                </>
            ) : null}
        </div>
    )
}