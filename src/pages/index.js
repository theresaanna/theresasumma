import * as React from "react"

import PageHeader from "../components/PageHeader"
import JobList from "../components/JobList"
import PageFooter from "../components/PageFooter"

const IndexPage = () => {
  return (
    <div className="container">
      <PageHeader/>
      <JobList/>
      <PageFooter/>
    </div>
  )
}

export default IndexPage
