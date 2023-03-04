import { useDispatch} from 'react-redux'
import { handleIndex } from '../../features/IndexSection'

const PreviousStep = ({prev}) => {

    const dispatch = useDispatch()

    const handleBack = () => {
        dispatch(handleIndex(prev))
    }

    return (

        <div className="previous-step">
            <button onClick={handleBack}>
                Go Back
            </button>
        </div>
    )
}

export default PreviousStep