import { useState } from "react"
import './Counter.css';

function Counter() {
    let [count, setCounter] = useState(0);

    function haendleIncrease() {
        setCounter(count + 1)
    }

    function haendleDecrease() {
        setCounter(count - 1)
    }
    
    return (
        <div>
        <h1>Counter App</h1>
        <h3>Current Count: {count}</h3>
        <button onClick={haendleIncrease} className="btn">Add +</button>
        <button onClick={haendleDecrease}>Remove -</button>
        </div>
    )
}

export default Counter

