import React from 'react';
import { useDispatch } from 'react-redux';
import { handlePickAdd } from '../../../features/stepThreeSlice';
import NextStep from '../nextStep';
import PreviousStep from '../previousStep';
import AddOnSelect from "./addOnSelect"

const StepThree = () => {

    const ref = React.useRef(null)
    const dispatch = useDispatch()

    
    React.useEffect(()=>{

        const { current } = ref

        return () => {

            const checkList = current.querySelectorAll('.select-addOn')
            const list = []

        for (let i = 0; i < checkList.length; i++) {
            let input = checkList[i]

            if(input.classList.contains('selected-addOn'))
                list.push({price:input.dataset.price, type: input.dataset.type})
                
        }
        
        dispatch(handlePickAdd(list))
        
        }
         
    }, [])

    return (
        <div className="container-step stepThree">
 
            <div className="header-step">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help enhance your gaming experience</p>
            </div>

            <div className="form-pickAdd">
                <form ref={ref}>
                    <AddOnSelect formRef={ref}/>
                </form>
            </div>


            <div className="navigate-step">
                <PreviousStep prev={2}/>
                <NextStep next={4}/>
            </div>

        </div>
    )
}

export default StepThree