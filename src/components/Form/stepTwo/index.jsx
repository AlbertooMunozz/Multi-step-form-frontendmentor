import NextStep from "../nextStep"
import PreviousStep from "../previousStep"
import Selects from "./selects"
import Switch from "./switch"

const StepTwo = () => {
    
    return (
        <div className="container-step stepTwo">

            <div className="header-step">
                <h2>Select yout plan</h2>
                <p>You have the option of monthly or yearly billing</p>
            </div>

            <div className="selects-plan">
                <Selects/>
            </div>

            <Switch/>


            <div className="navigate-step">
                <PreviousStep prev={1}/>                
                <NextStep next={3}/>
            </div>


        </div>
    )
}

export default StepTwo