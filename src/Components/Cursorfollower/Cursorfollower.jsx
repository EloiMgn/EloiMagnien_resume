import './Cursorfollower.scss';
import { useState, useEffect } from 'react';

const Cursorfollower = () => {

  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const setFromEvent = e => setPosition({x: e.clientX, y: e.clientY});
    window.addEventListener('mousemove', setFromEvent);
    return () => {
      window.removeEventListener('mousemove', setFromEvent);
    };
    
  });

  const divStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
  };

    return (
      <div className='cursor-follower' style={divStyle}></div>
      );
}; 

export default Cursorfollower;

	// /*
	// 	Set full height in blocks
	// */

  // // console.log(window.innerWidth);
	// // const height = window.height();

  // function cursorOver(){
  //   '.cursor-follower'.stop().animate({width: 86, height: 86, opacity: 0.1, margin: '-43px 0 0 -43px'}, 500);
  // }
  // function cursorOut(){
  // '.cursor-follower'.stop().animate({width: 26, height: 26, opacity: 0.4, margin: '-13px 0 0 -13px'}, 500);
  // }

  // 