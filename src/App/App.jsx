import { useContext } from 'react'
import { Store } from '../Components/Provider/Provider'
import './App.scss'
import Home from '../Pages/Home/Home'
import Header from '../Components/Header/Header'
import MagicMouse from '../Components/MagicMouse/MagicMouse'
import { is_touch_device } from '../Utils/tools'

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
        <div className='App__content-body'>
          <Home textArray={textArray}/>
        </div>
      </div>
  )
}

export default App
