import './Home.scss'
import Banner from '../../Components/Banner/Banner'

const textArray = [
  'Bienvenue !',
  'Front-End',
  'React/Javascript',
  'Sass'
]

const Home = () => {
  return (
    <div id="Home" className="Home">
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
        </div>
      </div>
    </div>
  )
}

export default Home
