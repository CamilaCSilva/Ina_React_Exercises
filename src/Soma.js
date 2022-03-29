import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default - sem chaves e export é com chave

function App() {

  // let contador = 0;

  // contador - var e setContador - funcao pra setar o contador, 0 valor inicial 
  const [soma,setSoma] = useState(0) 
  const [val1,setVal1] = useState(0)
  const [val2,setVal2] = useState(0)
  
  function Somar(val1,val2){
    const v1 = parseInt(val1)
    const v2 = parseInt(val2)
    const somaTemp = v1 + v2
    // console.log("somaTemp:",soma)
    setSoma(somaTemp)
    console.log("soma: ", soma)
  }

  function handleChange1(event){ setVal1(event.target.value) }
  function handleChange2(event){ setVal2(event.target.value) }

  return (
    <div className="App">
      <header className="App-header">
        Valor 1:
        <input type="number" value={val1} onChange={handleChange1}/>  

        Valor 2:
        <input type="number" value={val2} onChange={handleChange2}/>

        <button onClick={() => Somar(val1,val2)}>Somar</button>

        
        
      </header>
    </div>
  );
}

export default App;
