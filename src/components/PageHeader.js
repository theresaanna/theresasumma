import * as React from "react"

import "./PageHeader.sass"
import DarkPurpleStar from "../images/dark-purple-star.svg"

const PageHeader = () => {
  return (
    <header className="main">
      <div className="headers">
        <h1>Theresa Summa</h1>
        <h2>User Interface Engineer</h2>
        <img src={DarkPurpleStar} className="large-star"/>
      </div>
    </header>
  )
}

export default PageHeader
