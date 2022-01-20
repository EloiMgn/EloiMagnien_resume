
import ReactTypingEffect from 'react-typing-effect'
import './Banner.scss'
import About from '../About/About'

const Banner = ({ textArray }) => (
    <div className='banner'>
      <div className='banner__content '>
        <div className='banner__content__typedText'>
        <ReactTypingEffect text={textArray} eraseSpeed={50} eraseDelay={2000} speed={100} typingDelay={4000}/>
        </div>
        <About />
      </div>
    </div>

)

export default Banner
