import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/Slice'

export default function ReduxCounter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => {
        return state.counterReducer.count
    })
    return (
        <div>
            <h1>Count</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Ince</button>
            <button onClick={() => dispatch(decrement())}>Decr</button>
        </div>
    )
}
