import React, { useState } from "react"

export function Input() {
    const pessoas = [
        {
            nome: 'Camila',
            idade: 20
        },
        {
            nome: 'Davi',
            idade: 20
        },
        {
            nome: 'Chris',
            idade: 29
        }
    ]

    // const [p,setP] = useState()

    // function renderPessoas() {
    //     const result = pessoas.map((p) => 
    //         <h1>
    //             Nome: {p.nome}
    //             Idade: {p.idade}
    //         </h1>
    //     )
    //     setP(result)
    // }

    // arrow function é uma função sem um nome 
    // função tbm pode ser variavel em js
    // o react renderiza primeiro a tela branca, dps os elementos estáticos e dps os dinâmicos ou a tela
    // branca, useEffect e o useState

    return(
        <>
        {
            // eu pego pessoa que é tipo a struct
            pessoas.map((pessoa) => 
                <h1>
                    Nome: {pessoa.nome}  <br></br>
                    Idade: {pessoa.idade}
                </h1>
            )
        }
        </>
    )

}