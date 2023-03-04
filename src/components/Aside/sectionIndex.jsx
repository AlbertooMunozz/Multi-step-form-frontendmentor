import React from 'react'
import { useSelector} from 'react-redux'

const SectionIndex = ({indexS, info}) => {

const { index } = useSelector(state => state.index)

  return (
        <div className="aside-section">
                
        <div className="section-index">
            <button 
             style={{
                backgroundColor: `${index === indexS ? 'hsl(206, 94%, 87%)' : 'transparent'}`,
                color: `${index === indexS ? 'hsl(213, 96%, 18%)' : '#fff'}`}}
            >
                { indexS } 
            </button>
        </div>

        <div className="section-info">
            <div className="info-sectionStep">
                <h4>STEP { indexS }</h4>
            </div>
            <div className="info-headerStep">
                <p>{ info }</p>
            </div>
        </div>
        
        </div>
    )
}

export default SectionIndex
