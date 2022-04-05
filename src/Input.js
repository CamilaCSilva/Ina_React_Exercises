import React, { useState } from "react"

export function Input({name, type}) {
    const [value,setValue] = useState('')
    function handleChange(event) { setValue(event.target.value) }
    return <>
        {name}: <input type={type} value={value} onChange={handleChange}></input>
        {/* () => para não executar infinitamente, mas uso sem pra poder escrever */}
    </>
}


