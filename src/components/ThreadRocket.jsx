// import React, { useEffect, useRef, useState } from 'react';
// import PaperRocket from './PaperRocketSVG';
import React, { useEffect, useRef, useState } from 'react';
import '../css/styles.css';
// import '../css/threadRocket.css';

export default function ThreadRocket() {
  const threadRef = useRef();
  const rocketRef = useRef();
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    setContainerHeight(threadRef.current.clientHeight);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / maxScroll, 1);

      rocketRef.current.style.top =
        progress * (containerHeight - rocketRef.current.clientHeight) + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerHeight]);

  const handleClick = () => {
    const target = document.getElementById('scroll-target');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="thread-container">
      <div id="thread" ref={threadRef}></div>
      <img
        ref={rocketRef}
        src="\images\rocket.png"
        alt="Rocket"
        className="rocket-img"
        onClick={handleClick}
      />
    </div>
  );
}
