
import ReactTypingEffect from 'react-typing-effect'
import './Banner.scss'

const Banner = ({ textArray }) => (
    <div className='banner'>
      <div className='banner__content '>
        <ReactTypingEffect text={textArray} eraseSpeed={50} eraseDelay={2000} speed={100} typingDelay={4000}/>
      </div>
    </div>

)

export default Banner
