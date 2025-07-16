import './App.css';
import Navbar from './Components/Nav';
import Profile from './Components/Profile';
import Education from './Components/Education';
import Project from './Components/Project';
import Planet from './Components/Planet';
import Footer from './Components/Footer';
import { useRef } from 'react';
// import { Route, Routes } from 'react-router-dom';


function App() {

  const helloRef = useRef(null);
  // const profileRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const skillRef = useRef(null);

  const scrollToSection = (section) => {

    if(section === 'hello')
    {
      helloRef.current.scrollIntoView({ behhavior: 'smooth' })
    }
    // else if(section === 'profile')
    // {
    //   profileRef.current.scrollIntoView({ behhavior: 'smoth' })
    // }
    else if(section === 'project')
    {
      projectRef.current.scrollIntoView({ behhavior: 'smooth' })
    }
    else if(section === 'education')
    {
      educationRef.current.scrollIntoView({ behhavior: 'smooth' })
    }
    else if(section === 'skill')
    {
      skillRef.current.scrollIntoView({ behhavior: 'smooth' })
    }
    
    // behhavior: 'smoth'它的作用是：当你滚动页面时，让页面滚动得“慢慢地、平滑地”移动到目标位置，而不是“瞬间跳转”。
  }

  return (
    <div className="App">

      {/* <div className='container'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/education' element={<Education />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </div> */}

      {/* 在Navbar.jsx，点击哪个<a>，onScroll就等于哪个，然后onScroll={scrollToSection} */}

      {/* <nav className="nav">
            <ul>
                <li>
                    <a onClick={() => scrollToSection()}>Hello</a>
                </li>
                <li>
                    <a onClick={() => scrollToSection()}>About me</a>
                </li>
                <li>
                    <a onClick={() => scrollToSection()}>Project Experience</a>
                </li>
                <li>
                    <a onClick={() => scrollToSection()}>Education & Certification</a>
                </li>
                <li>
                    <a onClick={() => scrollToSection()}>Technical Skills</a>
                </li>
            </ul>
        </nav> */}

      <section>
        <Navbar onScroll={scrollToSection} />
      </section>

      <section ref={helloRef}>
        <Profile />
      </section>

      {/* <section ref={profileRef}>
        <Profile />
      </section> */}
      <section ref={projectRef}>
        <Project />
      </section>
      <section ref={educationRef}>
        <Education />
      </section>
      <section ref={skillRef}>
        <Planet />
      </section>
      <section>
        <Footer onScroll={scrollToSection} />
      </section>
    </div>
  );
}

export default App;
