import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    //Constante para acessar a pergunta atual que também será exibida no quiz
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    //payload envia quaisquer dados para o reducer; possibilita enviar a resposta correta e a resposta do usuário
    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestion.answer, option},
        });
    };

    return(
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} />
                ))}
            </div>
        </div>
    );
};

export default Question;