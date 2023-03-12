import { useContext } from "react"; //pega a pontuação do usuário
import { QuizContext } from "../context/quiz";

import WellDone from "../img/network.svg";

import "./GameOver.css";

//Informa o resultado do jogo; se for maior que 5, informa "Inovador" como o tipo de DEV (senão, DEV "Conservador") 
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    if (quizState.score > 5) {
        return (
            <div id="gameover">
                <img src={WellDone} alt="Fim do Quiz!" />
                <h2>Você é do tipo:</h2>
                <h1>INOVADOR</h1>
                <p>Você está sempre atento quando o assunto é inovação e se interessa por tudo que é criativo. Não coloca obstáculos na busca de novos conhecimentos. Neste caso você tem o perfil para desenvolvimento de sistemas para Web, Aplicações Móveis ou até mesmo a criação de games. As linguagens para que trilhe esse caminho são: </p>
                <h3>Linguagens: C++,  C#, Dart, Java</h3>            
                <div id="btn">
                    <button onClick={() => dispatch({type: "NEW_GAME"})}><span>Reiniciar</span></button>
                </div>    
            </div>
    )} else {
        return(
            <div id="gameover">
                <img src={WellDone} alt="Fim do Quiz!" />
                <h2>Você é do tipo:</h2>
                <h1>CONSERVADOR</h1>
                <p>Seu perfil está mais ligado a manutenção de sistemas já implantados, linguagens consolidadas são uma boa escolha para o seu perfil outra opção seria se tornar um administrador de banco de dados. Pode trabalhar em grandes organizações ou instituições financeiras. As linguagens para que trilhe esse caminho são: </p> 
                <h3>Linguagens: COBOL, C, SQL, Java</h3>
                <div id="btn">
                    <button onClick={() => dispatch({type: "NEW_GAME"})}><span>Reiniciar</span></button>
                </div>            
            </div>
    )};
};

export default GameOver;