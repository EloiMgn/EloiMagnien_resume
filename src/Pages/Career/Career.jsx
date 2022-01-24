import './Career.scss'
import Banner from '../../Components/Banner/Banner'

const textArray = [
  'Découvrez mon Parcours'
]

const Career = () => {
  return (
    <div id="Home" className="Home">
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
          Page Parcours
        </div>
      </div>
    </div>
  )
}

export default Career
