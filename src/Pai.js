import React from "react"

export function Pai() {
    return <>
    <Filho nome={"Eduardo"} />
    </>
}


export function Filho({nome}) { //{nome} porque eu estou passando uma props
    return <div>
        Meu nome é {nome}
    </div>
}

