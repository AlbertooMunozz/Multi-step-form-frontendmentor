import React from 'react';
import {useSelector} from 'react-redux'
import StepOne from './StepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFour from './stepFour';
import StepFive from './stepFive';

const Components = [StepOne, StepTwo, StepThree, StepFour, StepFive]

const ContainerSteps = () => {

    const { index } = useSelector(state => state.index)
    
    return (
        <React.Fragment>
            {React.createElement(Components[index - 1])}
        </React.Fragment>
    )
}

export default ContainerSteps