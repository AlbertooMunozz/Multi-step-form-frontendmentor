import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { handleCheck } from '../../../features/stepThreeSlice';
import { BsFillCheckSquareFill } from 'react-icons/bs'


const AddOnSelect = () => {

    const { yearly } = useSelector(state => state.stepTwo)
    const { pickOne, pickTwo, pickThree } = useSelector(state => state.stepThree)
    const dispatch = useDispatch();

    const handleSelect = e => {
        const container = e.target.closest('.select-addOn')

        dispatch(handleCheck(container.dataset.pos))
    }

    return (
        <>
            <div 
             className={`select-addOn ${pickOne ? 'selected-addOn' : ''}`} 
             data-price={yearly ? '10' : '1'}
             data-type="Online service"
             data-pos="one"
             onClick={handleSelect}
             >
                <div className="addOn-checkmark">
                    <BsFillCheckSquareFill 
                     color={pickOne ? ' hsl(243, 100%, 62%)' : ''}
                     style={{transition:'.3s'}}
                    />
                </div>

                <div className="addOn-info">
                    <h3>Online Service</h3>
                    <p>Access to multiplayer games</p>
                </div>

                <div className="addOn-price">
                    <p>+${yearly ? '10/yr' : '1/mo'}</p>
                </div>
            </div>

            <div 
             className={`select-addOn ${pickTwo ? 'selected-addOn' : ''}`}
             data-price={yearly ? '20' : '2'}
             data-type="Larger storage"
             data-pos='two'
             onClick={handleSelect}
            >
                <div className="addOn-checkmark">
                    <BsFillCheckSquareFill 
                     color={pickTwo ? ' hsl(243, 100%, 62%)' : ''}
                     style={{transition:'.3s'}}
                     />
                </div>

                <div className="addOn-info">
                    <h3>Larger storage</h3>
                    <p>Extra 1TB of cloud save</p>
                </div>

                <div className="addOn-price">
                    <p>+${yearly ? '20/yr' : '2/mo'}</p>
                </div>
            </div>

            <div 
             className={`select-addOn ${pickThree ? 'selected-addOn' : ''}`}
             data-price={yearly ? '20' : '2'}
             data-type="Customizable profile"
             data-pos='three'
             onClick={handleSelect}
            >
                <div className="addOn-checkmark">
                    <BsFillCheckSquareFill 
                     color={pickThree ? ' hsl(243, 100%, 62%)': ''} 
                     style={{transition:'.3s'}}
                    />
                </div>

                <div className="addOn-info">
                    <h3>Customizable profile</h3>
                    <p>Custom theme on your profile</p>
                </div>

                <div className="addOn-price">
                    <p>+${yearly ? '20/yr' : '2/mo'}</p>
                </div>
            </div>
        </>
    )
}

export default AddOnSelect