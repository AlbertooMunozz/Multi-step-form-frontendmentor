import { useDispatch, useSelector } from "react-redux"
import { handleIndex } from "../../../features/IndexSection"

const Confirm = () => {

    const {stepOneComplete} = useSelector(state => state.index)
    const dispatch = useDispatch()

    const handleConfirm = () => {
        if(!stepOneComplete)
         return

         dispatch(handleIndex(5))
    }

    return (
        <div className="confirm">
            <button onClick={handleConfirm}>
                Confirm
            </button>
        </div>
    )
}

export default Confirm