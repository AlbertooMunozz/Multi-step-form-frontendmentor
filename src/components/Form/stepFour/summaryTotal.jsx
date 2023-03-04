import { useSelector } from 'react-redux' 


const SummaryTotal = () => {

const { pickAdd } = useSelector(state => state.stepThree)
const { plan, yearly } = useSelector(state => state.stepTwo)
    
const totalSummary = () => {
    let total = 0
    for (let i = 0; i < pickAdd.length; i++) 
        total +=  parseInt(pickAdd[i].price) 

    return total + parseInt(plan.price) 
    
}

    return (
        <>
        <div className="total-title">
            <p>Total per ({yearly ? 'year' : 'month'})</p>
        </div>

        <div className="total">
            <p>${totalSummary()}/{yearly ? 'yr' : 'mo'}</p>
        </div>
        </>
    )
}

export default SummaryTotal