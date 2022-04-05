import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default - sem chaves e export é com chave

function Calc() {

  const [num1,setNum1] = useState(0) 
  const [num2,setNum2] = useState(0) 

  const [soma,setSoma] = useState(0)
  const [sub,setSub] = useState(0)
  const [resto,setResto] = useState(0)

  function handleChangeNum1(event){setNum1(event.target.value)}
  function handleChangeNum2(event){setNum2(event.target.value)}

  function FazCalc(num1,num2) {
    const n1 = parseInt(num1)
    const n2 = parseInt(num2)
    setSoma(n1+n2)
    setSub(n1-n2)
    setResto(n1%n2)
  }

//   se eu retornar uma coisa só não precisa colocar return ()
    return (
        <div className="App">
            <header className="App-header">
                Num 1:
                <input type="number" value={num1} onChange={handleChangeNum1}/>  
                Num 2:
                <input type="number" value={num2} onChange={handleChangeNum2}/>  
            
                <button onClick={() => FazCalc(num1, num2)} className="calc">Calcular</button>
                Soma: {soma} <br></br>
                Subtração: {sub} <br></br>
                Resto: {resto}
            </header>
        </div> 
  );
}

export default Calc
