import React from "react";

export function Input({ name, type }) {
  const pessoas = [
    {
      nome: "Davi",
      idade: 20,
    },
    {
      nome: "Camila",
      idade: 20,
    },
    {
      nome: "Chris",
      idade: 29,
    },
  ];

  return (
    <>
      {pessoas.map((p) => (
        <h1>
          Nome: {p.nome}
          Idade: {p.idade}
        </h1>
      ))}
    </>
  );
}
