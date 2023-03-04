import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan: {
        type: 'Arcade',
        price: '9'
    },
    yearly: false
}

export const stepTwoSlice = createSlice({
    name: 'stepTwo', 
    initialState, 
    reducers: {
        handlePlan: (state, action) => {
            state.plan.price = action.payload.price
            state.plan.type = action.payload.type
        } ,

        handleFrecuency: (state, action) => {
            state.yearly = action.payload
        }
        
    }
})

export const { handlePlan, handleFrecuency } = stepTwoSlice.actions
export default stepTwoSlice.reducer