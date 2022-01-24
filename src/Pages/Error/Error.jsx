import './Error.scss'
import Banner from '../../Components/Banner/Banner'

const textArray = [
  'Erreur'
]

const Error = () => {
  return (
    <div id="Home" className="Home">
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
          Page d&apos;Erreur
        </div>
      </div>
    </div>
  )
}

export default Error
