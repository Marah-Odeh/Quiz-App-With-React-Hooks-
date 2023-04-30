import "./App.css";
import Quiz from "./components/Quiz/Quiz";
import { QuizProvider } from "./contexts/QuizContext";

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
