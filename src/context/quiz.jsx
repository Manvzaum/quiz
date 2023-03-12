import { createContext, useReducer } from "react";
import questions from "../data/question";

//Criação de constantes para os estágios do quiz
const STAGES = ["Start", "Playing", "End"];

//Condições atuais do quiz
const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
}; 

//Criação de uma constante que possibilita alterar o estado do quiz baseado em switch
const quizReducer = (state, action) => {

    switch(action.type){

        //Pega o objeto integral, inclusive o gameStage anterior e, depois, substitui as propriedades que precisa mantendo o estado da aplicação
        case "CHANGE_STAGE":
            return{
                ...state,
                gameStage: STAGES[1],
            };

        //Algoritmo para retornar as opções reordenadas
        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() -0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            };
        
        //Para acessar a próxima pergunta e verifica se não há próxima questão; se chegar no fim, termina o jogo
        case "CHANGE_QUESTION":{
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;

            if(!state.questions[nextQuestion]){
                endGame = true;
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        //Retorna para o estado inicial
        }
        case "NEW_GAME":
            return initialState;

        //Verifica a opção escolhida, acrescenta um ponto se for correta e exibe o botão de continuar para a próxima questão
        case "CHECK_ANSWER":{
            console.log(action);
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;
            
            if(answer === option) correctAnswer = 1;

            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };
        }
        default:
            return state;
    }
};

//Inicializa o contexto
export const QuizContext = createContext();

//Informar par ao React onde o contexto é habilitado (useReduzer recebe quizReducer e initialState - para fazer a modificação de estado e saber o estado atual e para padronizar os valores iniciais do quiz)
export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};