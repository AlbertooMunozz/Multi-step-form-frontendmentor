import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { handleFrecuency } from '../../../features/stepTwoSlice';
const Switch = () => {

    const { yearly } = useSelector(state => state.stepTwo)

    const [active, setActive] = React.useState(yearly)

    const dispatch = useDispatch();
    
    React.useEffect(() => {
            dispatch(handleFrecuency(active))
    }, [active, dispatch])

    return (
        <div className="section-switch">
            <span style={{color:`${!active ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'}`}}>
                Monthly
            </span> 
            <div className="switch" onClick={() => setActive(!active)}>
                <div 
                    className={`switch-control ${active ? 'yearly' : 'monthly'}`}
                 />       
            </div>
            <span style={{color:`${active ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'}`}}>
                Yearly
            </span> 

        </div>
    )
}

export default Switch