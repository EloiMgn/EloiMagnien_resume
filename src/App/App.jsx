import { useContext } from 'react';
import { Store } from '../Components/Provider/Provider'
import './App.scss'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import MagicMouse from '../Components/MagicMouse/MagicMouse'
import { is_touch_device } from '../Utils/utils'

const textArray = [
  'Bienvenue !',
  'Je suis développeur front-End',
  'Je suis spécialisé en React'
]

const App = () => {
  const { theme } = useContext(Store)

  return (
    <div id="App" className={`theme-${theme}`}>
      {!is_touch_device() && <MagicMouse /> }
      <div className='App__content'>
        <div className='App__content-header'>
          <Header />
        </div>
        <div className='App__content-body'>
          <Banner textArray={textArray}/>
        </div>
      </div>
    </div>
  )
}

export default App
