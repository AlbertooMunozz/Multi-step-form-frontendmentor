export const handleInputText = (prev, value) => {

    if(value.length >= 41)
      return prev

    if(value.length < 41) {

    if(/[^a-zA-Z\s]/.test(value))
        return value.replace(/[^a-zA-Z\s]/g, "")
        
    else
        return value
    }

}

export const handleInputEmail = value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export const handleInputNumber = (prev, value, max) => {

    if(value.length >= max)
        return prev

    if(value.length < max) {
        if(/^[0-9]+$/.test(value))
            return value
        else 
            return value.replace(/[^0-9]/g, "");
    }

}

export const handleBorderError = (container, name) => {
    
    const containerError = document.querySelector(`.${container} .error-input`)

    if(containerError) {
      const pError = containerError.querySelector('p')

        if(pError) 
          document.querySelector(`.${container} input[name="${name}"]`).style.border = 'solid 1px #FF5151'

        else 
          document.querySelector(`.${container} input[name="${name}"]`).style.border = 'solid 1px #DDDCDE'
        
    }
   
}