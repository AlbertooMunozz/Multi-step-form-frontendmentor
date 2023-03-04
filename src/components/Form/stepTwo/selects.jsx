import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handlePlan } from '../../../features/stepTwoSlice'
import arcade from '../../../assets/images/icon-arcade.svg'
import advanced from '../../../assets/images/icon-advanced.svg'
import pro from '../../../assets/images/icon-pro.svg'

const Selects = () => {

    const dispatch = useDispatch();
    const { plan, yearly } = useSelector(state => state.stepTwo)

    const [selected, setSelected] = React.useState(plan.type);

    const handleSelect = e => {
        const select = e.target.closest('.plan')
        const { type, price } = select.dataset

        setSelected(type)

        dispatch(handlePlan({type, price}))
    }

    React.useEffect(() => {
        const { type, price } = document.querySelector('.selected').dataset

        dispatch(handlePlan({type, price}))
    },[yearly])

    return (
        <>
            <div 
             className={`plan ${selected === 'Arcade' ? 'selected' : ''}`}
             data-price={yearly ? '90' : '9'} 
             data-type="Arcade" 
             onClick={handleSelect} 
            >
                <div className="plan-icon">
                    <img src={arcade} alt="arcade-icon"/>
                </div>

                    <div className="plan-info">
                        <div className="info-type">
                            <span>Arcade</span>
                        </div>

                        <div className="info-price">
                            <span>${yearly ? '90/yr' : '9/mo'}</span>
                        </div>

                        {yearly && 
                            <div className="info-free">
                                <p>2 months free</p>
                            </div>
                        }
                    </div>
                    
            </div>

            <div 
             className={`plan ${selected === 'Advanced' ? 'selected' : ''}`}
             data-price={yearly ? '120' : '12'} 
             data-type="Advanced" 
             onClick={handleSelect} 
            >
                <div className="plan-icon">
                    <img src={advanced} alt="advanced-icon"/>
                </div>

                <div className="plan-info">
                    <div className="info-type">
                        <span>Advanced</span>
                    </div>

                    <div className="info-price">
                        <span>${yearly ? '120/yr' : '12/mo'}</span>
                    </div>

                    {yearly && 
                            <div className="info-free">
                                <p>2 months free</p>
                            </div>
                    }
                </div>

            </div>

            <div
             className={`plan ${selected === 'Pro' ? 'selected' : ''}`}
             data-price={yearly ? '150' : '15'} 
             data-type="Pro"
             onClick={handleSelect} 
            >
                <div className="plan-icon">
                    <img src={pro} alt="pro-icon"/>
                </div>

                <div className="plan-info">
                    <div className="info-type">
                        <span>Pro</span>
                    </div>

                    <div className="info-price">
                        <span>${yearly ? '150/yr' : '15/mo'}</span>
                    </div>

                    {yearly && 
                            <div className="info-free">
                                <p>2 months free</p>
                            </div>
                    }
                </div>

            </div>
        </>
    ) 
}

export default Selects