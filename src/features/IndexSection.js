import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 1,
    stepOneComplete: false 
}

export const IndexSection =  createSlice ({
    name:'indexSection',
    initialState,
    reducers : {
        handleIndex: (state, action) => {
            state.index = action.payload
        } , 

        handleSectionComplete: (state, action) => {
            state.stepOneComplete = action.payload
        }

    }
})

export const { handleIndex, handleSectionComplete} = IndexSection.actions
export default IndexSection.reducer