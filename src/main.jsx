import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import { QuizProvider } from "./context/quiz";

/*App foi encapsulado em Provider para ter acesso ao contexto por meio dos componentes*/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>    
  </React.StrictMode>
);