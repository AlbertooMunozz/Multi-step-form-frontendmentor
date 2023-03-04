import { createSlice } from "@reduxjs/toolkit";
import { handleInputEmail, handleInputNumber, handleInputText } from "../helpers/handleForm";

const initialState = {
    personalName: '',
    personalEmail: '',
    personalEmailComplete:false,
    personalPhone: '',
    activeError: false
}

export const stepOneSlice = createSlice({
    name:'stepOne',
    initialState,
    reducers: {
        handleName: (state, action) => {
            state.personalName = handleInputText(state.personalName, action.payload )
        } ,
        
        handleEmail: (state, action) => {
            state.personalEmail = action.payload
            state.personalEmailComplete = handleInputEmail(action.payload) 
        } ,

        handlePhone: (state, action) => {
            state.personalPhone = handleInputNumber(state.personalPhone, action.payload, 13)
        } ,

        setError: state => {
            state.activeError = true
        }

    }
})

export const { handleName, handleEmail, handlePhone, setError } = stepOneSlice.actions
export default stepOneSlice.reducer