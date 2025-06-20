// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../mysets/images/logo-s.png'
// import Logo from './Logo'
import { Link } from "react-router-dom";
import './index.scss'

const House = () => {
  return(
    <main className='Main'>
        <section id="home" className="home-section">
          <h1>Welcome to our VeriGen Website</h1>
          <p>Ask any Verilog code here.</p>
        </section>
        <Link to="/Home">
            <button type="submit" className="white-button">
              Use VeriGen
            </button>
            </Link>
      </main>
      
  )




  // const [letterClass, setLetterClass] = useState('text-animate')

  // const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n']
  // const jobArray = [
  //   'w',
  //   'e',
  //   'b',
  //   ' ',
  //   'd',
  //   'e',
  //   'v',
  //   'e',
  //   'l',
  //   'o',
  //   'p',
  //   'e',
  //   'r',
  //   '.',
  // ]

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  // return (
  //   <>
  //     <div className="container home-page">
  //       <div className="text-zone">
  //         <h1>
  //           <span className={letterClass}>H</span>
  //           <span className={`${letterClass} _12`}>i,</span>
  //           <br />
  //           <span className={`${letterClass} _13`}>I</span>
  //           <span className={`${letterClass} _14`}>'m</span>
  //           <img
  //             src={LogoTitle}
  //             alt="JavaScript Developer Name, Web Developer Name"
  //           />
  //           <AnimatedLetters
  //             letterClass={letterClass}
  //             strArray={nameArray}
  //             idx={15}
  //           />
  //           <br />
  //           <AnimatedLetters
  //             letterClass={letterClass}
  //             strArray={jobArray}
  //             idx={22}
  //           />
  //         </h1>
  //         <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
  //         <Link to="/contact" className="flat-button">
  //           CONTACT ME
  //         </Link>
  //       </div>
  //       <Logo />
  //     </div>

  //     <Loader type="pacman" />
  //   </>
  // )
}

export default House