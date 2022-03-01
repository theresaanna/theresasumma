import * as React from "react"

import "./Intro.sass"
import LargePurpleStar from "../images/dark-purple-star.svg"

const Intro = () => {
  return (
    <div className="intro row">
      <div className="purple-star col-sm-3">
        <img src={LargePurpleStar} className="large-star"/>
      </div>
      <div className="about-me col-sm-9">
        <h3>About me</h3>
        <div className="row">
          <ul className="contact col-sm-3">
            <li><a href="mailto:theresasumma@gmail.com">theresasumma at gmail</a></li>
            <li>Bay Area, California</li>
            <li><a href="https://github.com/theresaanna">Github profile</a></li>
          </ul>
          <div className="about-text col-sm-9">
            <p>I am a <span className="emphasis">user interface software engineer of over ten years</span>, specializing in front end development.
  I have also spent <span className="emphasis">three and a half years as an engineering manager</span> within the federal
  government. I am experienced with the latest technologies and language features, such as hook-based React and ES6. I am also an advocate for <span className="emphasis">open source software, built iteratively</span>. I am returning from a
  three year work hiatus, extended by the pandemic.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
