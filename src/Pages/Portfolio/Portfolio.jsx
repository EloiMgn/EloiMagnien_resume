import './Portfolio.scss'
import Banner from '../../Components/Banner/Banner'

const textArray = [
  'Découvrez mes projets'
]

const Portfolio = () => {
  return (
    <div id="Home" className="Home">
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
          Page Portfolio
        </div>
      </div>
    </div>
  )
}

export default Portfolio
