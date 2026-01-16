import React, { useState, useEffect } from 'react';
import ProfileDesktop from './profile2.jpeg';
import ProfileMobile from './profile-mobile.jpeg';
// import { Link } from 'react-router-dom';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
  <div className="about-container">
    <img src={isMobile ? ProfileMobile : ProfileDesktop} alt="Yunyi Zhu"/>
    <div className="self-description-container">
      <div className="my-name">
        Yunyi Zhu
      </div>
      <div className="paragraph">
        PhD Candidate in the <a href="https://hcie.csail.mit.edu/" target="_blank">HCI Engineering Group</a> at the <a href="https://www.csail.mit.edu/" target="_blank">MIT Computer Science and Artificial Intelligence Lab</a>. I am advised by <a href="https://hcie.csail.mit.edu/stefanie-mueller" target="_blank">Prof. Stefanie Mueller</a>. 

        I am a 2021 <a href="https://oge.mit.edu/fellowships/presidential-graduate-fellowship-program/" target="_blank">Jacobs Presidential Fellow</a>. During my PhD, I have worked at the University of Tokyo with <a href="https://narumi.me/" target="_blank">Prof. Koya Narumi</a>.  
      </div>

      <div className="paragraph">
      In my research, I develop new devices and systems that interact with programmable structures and materials. For example, I use <a href="https://hcie.csail.mit.edu/research/lenticularobject/lenticular-object.html" target="_blank">lenticular structure</a> and  <a href="https://hcie.csail.mit.edu/research/portachrome/portachrome.html" target="_blank">photochromic material</a> to achieve programmable surface textures on 3D objects. 
      </div>



      {/* <div className="paragraph">
        Before joining as a PhD student, I worked at <a href="https://www.csail.mit.edu/" target="_blank">MIT CSAIL</a> as an undergraduate research assistant
        with <a href="https://hcie.csail.mit.edu/stefanie-mueller.html" target="_blank">
        Prof. Stefanie Mueller
      </a> and <a href="https://people.csail.mit.edu/dnj/" target="_blank">
        Prof. Daniel Jackson
      </a>, where I won the <a href="https://www.eecs.mit.edu/2021-eecs-awards/" target="_blank">MIT EECS best undergraduate research award</a> in 2019 and 2021. 
      </div> */}

        <div className="paragraph">
        <div className="semibold">
          Email:
        </div>
        <div>yunyizhu@mit.edu</div>
      </div>

    </div>
  </div>
  );
};

export default About;