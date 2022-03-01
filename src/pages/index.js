import * as React from "react"

import PageHeader from "../components/PageHeader"
import Intro from "../components/Intro"
import JobList from "../components/JobList"
import PageFooter from "../components/PageFooter"
import "./index.sass"

import "../libs/sass-flexbox-grid/main.min.css"

const IndexPage = () => {
  return (
    <div className="container">
      <PageHeader/>
      <Intro/>
      <JobList/>
      <PageFooter/>
    </div>
  )
}

export default IndexPage
