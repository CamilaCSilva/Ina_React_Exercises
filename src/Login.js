import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// export default - sem chaves e export é com chave

function App() {

  // let contador = 0;

  // contador - var e setContador - funcao pra setar o contador, 0 valor inicial 
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  // const [val2,setVal2] = useState(0)

  function handleEmailChange(event) { setEmail(event.target.value) }
  function handlePassChange(event) { setPass(event.target.value) }

  function ConfereDados(email, pass) {
    if (email == 'camila.silva@ges.inatel.br' && pass == '1234') {
      alert("Logado")
    }
    else {
      alert("E-mail ou senha incorretos")
    }
  }
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="login">Login</h1>
        <br></br>
        E-mail:<input type="text" className="email" value={email} onChange={handleEmailChange}></input>
        Senha:<input type="password" className="pass" value={pass} onChange={handlePassChange}></input>
        <button onClick={() => ConfereDados(email, pass)} className="logar">Logar</button>

      </header>
    </div>
  );
}

export default App;
