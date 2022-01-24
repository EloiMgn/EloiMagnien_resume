import { useContext } from 'react'
import { Store } from '../Components/Provider/Provider'
import './App.scss'

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import MagicMouse from '../Components/MagicMouse/MagicMouse'
import { is_touch_device } from '../Utils/tools'
import Routing from '../Router/Router'

const App = () => {
  const { theme } = useContext(Store)

  return (
    <div id="App" className={`theme-${theme}`}>
      {!is_touch_device() && <MagicMouse /> }
      <Header/>
        <div className='App__content-body'>
          <Routing />
        </div>
      <Footer/>
    </div>
  )
}

export default App
