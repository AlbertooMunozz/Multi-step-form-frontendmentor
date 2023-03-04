import PreviousStep from "../previousStep"
import Confirm from "./confirm"
import SummaryAddOn from './summaryAddOn'
import SummaryPlan from './summaryPlan'
import SummaryTotal from './summaryTotal'

const StepFour = () => {

    return (
        <div className="container-step stepFour">

            <div className="header-step">
                <h2>Finishing up</h2>
                <p>Double check everything looks OK before confirming</p>
            </div>

            <div className="section-summary">

                <div className="summary-count">
                    <div className="summary-plan">
                        <SummaryPlan/>
                    </div>

                        <i/>

                    <div className="summary-addOns">
                       <SummaryAddOn/>
                    </div>
                </div>

                    <div className="summary-total">
                        <SummaryTotal/>
                    </div>

            </div>

            <div className="navigate-step">
                <PreviousStep prev={3}/>
                <Confirm/>      
            </div>

        </div>
    )
}

export default StepFour