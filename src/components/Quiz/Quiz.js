import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import Question from "../Question/Question";
import "./quiz.css";
const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log("quizState", quizState);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got  {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length}
            </div>
            <div
              className="next-button"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            NEXT QUESTION
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
