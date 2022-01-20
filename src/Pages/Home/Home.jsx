import './Home.scss'
import Banner from '../../Components/Banner/Banner'
import Header from '../../Components/Header/Header'
import React from '../../Utils/Assets/img/1280px-React-icon.svg.png'

const textArray = [
  'Bienvenue !',
  'Front-End',
  'React/Javascript',
  'Sass'
]

const Home = () => {
  return (
    <div id="Home" className="Home">
      <Header />
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
        </div>
      </div>
    </div>
  )
}

export default Home
