import { useSelector } from 'react-redux' 


const SummaryAddOn = () => {

    const { pickAdd } = useSelector(state => state.stepThree)
    const { yearly } = useSelector(state => state.stepTwo)

    return (
        <>
        {pickAdd.map((pick, index) => (
            <div className="addOn-pick" key={index}>
                <div className="pick-type">
                    <p>{pick.type}</p>
                </div>

                <div className="pick-price">
                    +${pick.price}/{yearly ? 'yr' : 'mo'} 
                </div>
            </div>
        ) )}

        {
            pickAdd.length === 0 && 
             <p className='not-add'>you did not add any additional services</p>
        }


        </>
    )
}

export default SummaryAddOn