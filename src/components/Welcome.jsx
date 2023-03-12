import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/developer.svg";

import "./Welcome.css"; 

//quizState pega os valores e o dispatch altera os valores do reducer
const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
 
  return (
    <div id="welcome">
        <h1>&lt; &gt;</h1>
        <h2>Conheça um pouco mais sobre o seu perfil como desenvolvedor de sistemas, assim como algumas linguagens mais adequadas ao seu perfil e as possibilidades de carreira.</h2>
        <h1>&lt;/&gt;</h1>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STAGE"})}><span>Iniciar</span></button>
        <img src={Quiz} alt="Início do Quiz" /> 
    </div>
  );
};

export default Welcome;