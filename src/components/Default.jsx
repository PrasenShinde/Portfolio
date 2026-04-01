import React from 'react'
import {Link , Element} from 'react-scroll'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'
import TechnicalStack from './TechnicalStack'

function Default() {
  return (
    <>
      <Element name="home"><Home/></Element>
      <Element name="about"><About/></Element>
      <Element name="techstack"><TechnicalStack/></Element>
      <Element name="projects"><Projects/></Element>
      <Element name="contact"><Footer/></Element>
    </>
  )
}

export default Default
