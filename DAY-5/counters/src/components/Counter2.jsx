import { useState } from "react";
import Counter1 from "./Counter1";
import Counter3 from "./Counter3";


function Counter2() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("");

    let handleIncrement = () => {
        if(count >= 10) {
            setMessage("Maximum Limit Reached")
            return
        } 
        setCount(count + 1);
        setMessage("");
    }

    let handleDecrement = () => {
        if(count <= 0) {
            setMessage("Minimum Limit Reached")
            return
        }
        setCount(count - 1)
        setMessage("");
    }

    return (
        <>
            <div className="counters">
                    <Counter1 num={count}/>
                <div className="counter-card center-card">
                    <button onClick={handleIncrement}>Increment</button>
                    <h1>{count}</h1>
                    <button onClick={handleDecrement}>Decrement</button>
                    <div className="msg"><h3>{message}</h3></div>
                </div>
                    <Counter3 num={count}/>
            </div>
        </>
    )
}

export default Counter2