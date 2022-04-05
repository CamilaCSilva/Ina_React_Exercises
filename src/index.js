import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Soma from './Soma';
import Login from './Login';
import Calc from './Calculadora';
import reportWebVitals from './reportWebVitals';
import {Pai, Filho} from './Pai';
// import {Input} from './Input';
import {Input} from './InputRend';


ReactDOM.render(
  <React.StrictMode>
    <Input/>
    {/* <Input name="senha" type="password"/> */}
    {/* o index é o pai que envia as infos para input */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
