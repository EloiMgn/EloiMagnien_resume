import './Contact.scss'
import Banner from '../../Components/Banner/Banner'

const textArray = [
  'Contactez-moi !!'
]

const Contact = () => {
  return (
    <div id="Home" className="Home">
      <div className='Home__content'>
        <div className='Home__content-body'>
          <Banner textArray={textArray}/>
          Page Contact
        </div>
      </div>
    </div>
  )
}

export default Contact
