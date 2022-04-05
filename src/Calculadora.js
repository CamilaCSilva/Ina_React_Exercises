import React from "react"; 
import { useState } from "react";

function Calculadora(props) {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Somar() {
        const resultadoTemp = parseInt(num1) + parseInt(num2);
        setResultado(resultadoTemp);
        console.log("soma: ", resultado);
    }

    function Subtrair() {
        const resultadoTemp = parseInt(num1) - parseInt(num2);
        setResultado(resultadoTemp);
        console.log("subtrair: ", resultado);
    }

    function RestodaDivisao() {
        const resultadoTemp = parseInt(num1) % parseInt(num2);
        setResultado(resultadoTemp);
        console.log("divisao: ", resultado);
    }

    function handleChange1(event) {setNum1(event.target.value)}
    function handleChange2(event) {setNum2(event.target.value)}



  return (<div className="Calculadora">
    <header className="Calculadora-header">
        Número 1:
        <input type="number" value={num1} onChange={handleChange1}/><br></br>

        Número 2:
        <input type="number" value={num2} onChange={handleChange2}/><br></br>

        Resultado:
         <output type = "text" value={resultado}> </output>
         {resultado}<br></br>

        <button onClick={() => Somar(num1,num2)}>Somar</button><br></br>
        <button onClick={() => Subtrair(num1,num2)}>Subtrair</button><br></br>
        <button onClick={() => RestodaDivisao(num1,num2)}>Resto da divisao</button><br></br>
      
      </header>
      </div>
      );
}

export default Calculadora;