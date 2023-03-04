import { useDispatch, useSelector } from "react-redux"
import { handleIndex } from "../../../features/IndexSection"
import { setError } from "../../../features/stepOneSlice"

export const NextStep = ({next}) => {

    const dispatch = useDispatch()

    const { stepOneComplete } = useSelector(state => state.index)

    const handleNext = () => {
        dispatch(setError())

        if(!stepOneComplete)
            return 
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
