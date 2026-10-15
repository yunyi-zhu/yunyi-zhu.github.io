import React, { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import Research from "../components/research/research";
import Demos from "../components/demos/demos";
import Awards from "../components/awards/awards";
import ConferenceAttendance from "../components/conference/conference-attendance";
import Teaching from "../components/teaching/teaching";
import Projects from "../components/projects/projects-on-main-page";
import Footer from "../components/navbar/footer";

const MainPage = () => {
  // Static project pages (e.g. /tangimap/) link back with ?scroll=<section id>
  useEffect(() => {
    const section = new URLSearchParams(window.location.search).get('scroll');
    if (!section) return;
    // Wait for images so the section's position is final
    const scroll = () => scroller.scrollTo(section, { smooth: true, offset: -70, duration: 200 });
    if (document.readyState === 'complete') {
      scroll();
    } else {
      window.addEventListener('load', scroll, { once: true });
      return () => window.removeEventListener('load', scroll);
    }
  }, []);

  return (
    <div className="page-container">
      <Navbar page="index"/>
      <div className="body-part">
        <About />
        <div id="publications">
          <Research />
        </div>
        <div>
          <Demos />
        </div>
        <div id="awards">
          <Awards />
        </div>
        <div>
          <ConferenceAttendance />
        </div>
        <div id="teaching">
          <Teaching />
        </div>
        {/* <div>
          <Projects />
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}

export default MainPage;