import React from "react";
import { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0)
const decreamentCount = () => {
    setCount(prevCount => prevCount - 1)
}
const increamentCount = () => {
    setCount(prevCount => prevCount + 1)
}


    return (
        <>
        <button onClick={decreamentCount}>-</button>
        <span>{count}</span>
        <button onClick={increamentCount}>+</button>
        </>
    )
}
export default Counter;