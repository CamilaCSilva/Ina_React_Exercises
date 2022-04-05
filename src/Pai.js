import React from "react";

export function Pai(){
    return <>
      <Filho nome={("Eduardo")}/>
    </>
    
}

export function Filho({nome}){
    return <div>
        Meu nome é {nome}
        </div>
}