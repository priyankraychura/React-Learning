import { createSlice } from '@reduxjs/toolkit'

export const createCrude = createSlice({
    name : ' createCrude',
    initialState : {count : 0},
    reducers : {
        increment : (state, action)=>{
            state.count += 1
        },
        decrement : (state, action)=>{
            state.count -= 1
        }
    }
})

export const { increment, decrement } = createCrude.actions
export default createCrude.reducer