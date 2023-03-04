import { Provider } from 'react-redux'
import store from './app/store'
import '../src/styles/Style.css'
import ContainerSteps from './components/Form/Index'
import ContainerAside from './components/Aside'


const App = () => {


  return (
    
  <Provider store={store}>
      <div className="container">

        <div className="container-aside-section">
          <ContainerAside/>
        </div>

        <div className="container-steps-section">
          <ContainerSteps/>
        </div>

      </div>
  </Provider>
    
  ) 
}

export default App