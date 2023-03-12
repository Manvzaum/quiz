import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import "./App.css";

function App(){
    const [quizState, dispatch] = useContext(QuizContext);

    //Embaralha as opções de resposta
    useEffect(() => {
        dispatch({type: "REORDER_QUESTIONS"});
    }, []);
    
    //Acesso aos objetos; verifica se é igual a Start; se for, imprime Welcome (o mesmo para Question e GameOver)
    return(
        <div id="container">
            <div>
            <h1 id="title">Carreira DEV</h1>
            <h1 id="line">&#95;</h1>
            </div>
        <div className="App">
            {quizState.gameStage === "Start" && <Welcome />}
            {quizState.gameStage === "Playing" && <Question />}
            {quizState.gameStage === "End" && <GameOver />}
        </div>
        </div>
    );
}

export default App;