import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { handleSectionComplete } from "../../../features/IndexSection"
import NextStep from './nextStep';
/* import { setError } from '../../../features/stepOneSlice'; */

import PersonalEmail from "./personalEmail"
import PersonalName from "./personalName"
import PersonalPhone from "./personalPhone"

const StepOne = () => {
    
    const {personalName, personalEmail, personalPhone, personalEmailComplete} = useSelector(state => state.stepOne)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(handleSectionComplete(false))

        if(personalName.length < 2)
            return
        if(personalEmailComplete === false)
            return 
        if(personalPhone.length < 8)
            return

        dispatch(handleSectionComplete(true))
    }, [personalName, personalEmail, personalPhone, personalEmailComplete, dispatch])


    return (
        <div className="container-step stepOne">

            <div className="header-step">
                <h1>Personal Info</h1>
                <p>Please provide your name, email adress, and phone number</p>
            </div>

            <div className="form-personalInfo">
                <form>
                    <PersonalName/>
                    <PersonalEmail/>
                    <PersonalPhone/>
                </form>
            </div>

            <div className="navigate-step">
                <div className="l"/>
               
                <NextStep next={2}/>
            </div>

        </div>
    )
}

export default StepOne