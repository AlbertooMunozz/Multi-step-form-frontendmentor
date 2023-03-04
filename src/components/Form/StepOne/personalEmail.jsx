import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleEmail } from "../../../features/stepOneSlice"
import { handleBorderError } from "../../../helpers/handleForm"

const PersonalEmail = () => {

    const { personalEmail, personalEmailComplete, activeError } = useSelector(state => state.stepOne)

    const dispatch = useDispatch()

    const handleInput = e => dispatch(handleEmail(e.target.value))

    React.useEffect(() => {
        handleBorderError('personalInfo-email', 'email')
    })

    return (
        <div className="personalInfo-email">

            <div className="title-input">

                <label htmlFor="personalEmail">Email Adress</label>

                {activeError &&
                <div className="error-input">

                {!personalEmailComplete
                    ? <p>Complete this field</p>
                    : ''
                }

                </div>
                }

            </div>

            <input 
                type="email"
                id="personalEmail"
                name="email"
                placeholder="e.g.stephenking@lorem.com"
                value={personalEmail}
                onChange={handleInput}
            />

        </div>
    )
}

export default PersonalEmail