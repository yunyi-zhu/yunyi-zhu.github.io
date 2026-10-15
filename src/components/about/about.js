import React, { useState, useEffect } from 'react';
import ProfileDesktop from './profile2.jpeg';
import ProfileMobile from './profile-mobile.jpeg';
import news from '../../data/news.json';

const NEWS_PREVIEW_COUNT = 3;
// import { Link } from 'react-router-dom';

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAllNews, setShowAllNews] = useState(false);

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

        I am a 2021 <a href="https://oge.mit.edu/fellowships/presidential-graduate-fellowship-program/" target="_blank">Jacobs Presidential Fellow</a> and a 2024-25 Ben Gold Fellow. During my PhD, I have interned at the University of Tokyo with <a href="https://narumi.me/" target="_blank">Prof. Koya Narumi</a>, and at Adobe Research with <a href="https://chang.engineer/" target="_blank">Prof. Chang Xiao</a>.  
      </div>

      <div className="paragraph">
        I'm interested in bringing the flexibility of software to the physical world. To this end, I develop <a href="https://hcie.csail.mit.edu/research/shiftlens/shiftlens.html" target="_blank">computational optical structures</a>, <a href="https://hcie.csail.mit.edu/research/portachrome/portachrome.html" target="_blank">devices for programmable materials</a>, and context-aware electronic systems that let everyday objects and environments change their appearance and function after they are made.
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

      <div className="news">
        <div className="semibold">News</div>
        <ul>
          {(showAllNews ? news : news.slice(0, NEWS_PREVIEW_COUNT)).map((item, i) =>
            <li key={i}>
              <span className="news-date">{item.date}</span>
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>)}
        </ul>
        {news.length > NEWS_PREVIEW_COUNT &&
          <button className="news-toggle" onClick={() => setShowAllNews(!showAllNews)}>
            {showAllNews ? 'Show less' : `Show ${news.length - NEWS_PREVIEW_COUNT} more`}
          </button>}
      </div>

    </div>
  </div>
  );
};

export default About;