import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pickAdd : [],
    pickOne : false,
    pickTwo : false,
    pickThree : false
}

export const stepThreeSlice = createSlice({
    name: 'stepThree', 
    initialState, 
    reducers: {
        handlePickAdd: (state, action) => {
            state.pickAdd  = action.payload
        } ,

        handleCheck: (state, action) => {
            if(action.payload === 'one')
                state.pickOne = !state.pickOne

            if(action.payload === 'two')
                state.pickTwo = !state.pickTwo

            if(action.payload === 'three')
                state.pickThree = !state.pickThree  
            
        }
    }
})


export const { handlePickAdd, handleCheck } = stepThreeSlice.actions
export default stepThreeSlice.reducer