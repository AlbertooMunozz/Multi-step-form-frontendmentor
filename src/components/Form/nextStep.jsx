import { useDispatch } from "react-redux"
import { handleIndex } from "../../features/IndexSection"

const NextStep = ({next}) => {

    const dispatch = useDispatch()
    
    const handleNext = () => {

        dispatch(handleIndex(next))
    }

    return (
        <div className="next-step">
            <button onClick={handleNext}>
                Next Step
            </button>
        </div>
    )
}

export default NextStep