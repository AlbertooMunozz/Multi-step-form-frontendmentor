import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { handleName } from "../../../features/stepOneSlice"
import { handleBorderError } from '../../../helpers/handleForm';

const PersonalName = () => {


    React.useEffect(() => {
        handleBorderError('personalInfo-name', 'name')
    })

    const { personalName, activeError } = useSelector(state => state.stepOne)
    const dispatch = useDispatch()

    const handleInput = e => dispatch(handleName(e.target.value))

    return (
        <div className="personalInfo-name">

            <div className="title-input">
                <label htmlFor="personalName">Name</label>

            { activeError &&
                <div className="error-input">

                { personalName.length < 2
                    ? <p>Complete this field</p>
                    : ''
                }

                </div>
            }
            
            </div>

            <input 
                type="text"
                name="name"
                id="personalName"
                placeholder="e.g.Stephen King"
                value={personalName}
                onChange={handleInput}
            />
        </div>
    )
}

export default PersonalName