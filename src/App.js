import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default - sem chaves e export é com chave

function App() {

  // let contador = 0;

  // contador - var e setContador - funcao pra setar o contador, 0 valor inicial 
  const [contador,setContador] = useState(0) 
  function incrementaCont(){
    // contador++;
    setContador(contador+1)
    console.log(contador)
  }
  function handleChange(event){
    setContador(event.target.value) // pega o valor do contador
  }

  return (
    <div className="App">
      <header className="App-header">
        Valor 1:
        <input type="number" value={contador} onChange={handleChange}/>  
        {/* funcao sem () é quando eu não sei o que eu vou receber, então eu coloco um evento como paramentro */}
        contador: {contador}
        {/* <button onClick={() => incrementaCont()}>soma</button> */}
      </header>
    </div>
  );
}

export default App;
