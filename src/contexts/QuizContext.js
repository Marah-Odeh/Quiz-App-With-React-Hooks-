import { createContext, useReducer } from "react";
import { shuffleAnswers } from "../helper";
import questions from "../data";
const initialState = {
  questions,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: "",
};
const reducer = (state, action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(questions[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;
      return { ...state, currentAnswer: action.payload, correctAnswerCount };
    }
    default: {
      return state;
    }
  }
  return state;
};
export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children} </QuizContext.Provider>;
};
