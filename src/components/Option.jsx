import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

//Verifica se a opção foi selecionada; as opções são renderizadas no componente Question.jsx
const Option = ({option, selectOption, answer}) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <div className= "option" onClick={() => selectOption() + dispatch({type: "CHANGE_QUESTION"})}>
            <p>{option}</p>
        </div>       
    );
};

export default Option;