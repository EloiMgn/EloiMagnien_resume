import './Cursorfollower.scss';
import { useState, useEffect } from 'react';

const Cursorfollower = () => {

  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const setFromEvent = e => {
      setPosition({x: e.layerX, y: e.layerY});
    };
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
