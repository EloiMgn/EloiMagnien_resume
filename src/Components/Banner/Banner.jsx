/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import ReactTypingEffect from 'react-typing-effect';
import Portrait from '../../Utils/Assets/Photo_CV1.jpg';
import './Banner.scss';
import 'animate.css';


const Banner = ({textArray}) => (
    <div className='banner'>
      <div className='banner__content '>
        <div className='banner__content__portrait'>
          <img className='banner__content__portrait--img' src={Portrait} alt="" />
        </div>
        <div className='banner__content__typedText'>
        {/* <ReactTypingEffect text={['Bienvenue!']} eraseSpeed={50} eraseDelay={2000} speed={100} typingDelay={0}/> */}
        {/* <br /> */}
        <ReactTypingEffect text={textArray} eraseSpeed={50} eraseDelay={2000} speed={100} typingDelay={1000}/>
        </div>
      </div>
    </div>
  
    );

  export default Banner;