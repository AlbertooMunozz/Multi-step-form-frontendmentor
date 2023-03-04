import { useDispatch, useSelector } from 'react-redux' 
import { handleIndex } from '../../../features/IndexSection'


const SummaryPlan = () => {

    const { plan, yearly } = useSelector(state => state.stepTwo)
    const dispatch = useDispatch()
    const handleChange = () => { 
        dispatch(handleIndex(2))
    }
    return (
        <>
            <div className="plan">
                <div className="plan-selected">
                    <span>{plan.type} </span>
                    <span>{yearly ? '(Yearly)' : '(Monthly)'}</span>
                </div>
                                
                <span className='change' onClick={handleChange}>Change</span>
            </div>

            <div className="plan-price">
                <p>${plan.price}/{yearly ? 'yr' : 'mo'}</p>
            </div>
        </>
    )
}

export default SummaryPlan