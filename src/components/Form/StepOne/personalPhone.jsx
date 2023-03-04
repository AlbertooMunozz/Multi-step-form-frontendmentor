import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { handlePhone } from "../../../features/stepOneSlice"
import { handleBorderError } from "../../../helpers/handleForm";

const PersonalPhone = () => {

    const { personalPhone, activeError } = useSelector(state => state.stepOne)
    const dispatch = useDispatch();

    const handleInput = e => dispatch(handlePhone(e.target.value))

    React.useEffect(() => {
        handleBorderError('personalInfo-phone', 'phone')
    })

    return (
        <div className="personalInfo-phone">

        <div className="title-input">
            <label htmlFor="personalPhone">Phone Number</label>

            {activeError &&
                <div className="error-input">

                {personalPhone.length < 8
                    ? <p>Complete this field</p>
                    : ''
                }

                </div>
            }

        </div>

            <input 
                type="text"
                id="personalPhone"
                name="phone"
                placeholder="e.g.+1 234 567 890"
                value={personalPhone}
                onChange={handleInput}
            />

        </div>
    )
}

export default PersonalPhone