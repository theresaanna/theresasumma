import * as React from "react"

import "./JobList.sass"

const JobList = () => {
  return (
    <main className="jobs">
      <h1>Most Notable Roles</h1>
      <p className="jobs-intro">
        I have had two primary stages in my career so far. The first was working at media companies in NYC. In the second stage, I worked for the federal government, both at 18F/TTS and the Consumer Financial Protection Bureau. My role at those two government agencies is outlined here.
      </p>
      <section className="tts primary-job">
        <h2>Lead Innovation Specialist</h2>
        <p>18F/TTS - San Francisco, CA - August 2014 to August 2018</p>
        <h3>As a software developer on the engineering team:</h3>
        <ul>
          <li>
            Participated in build and path analysis for client agencies including the FEC, ATF, and The White House. ● As part of an agile team, helped define and build new features for eRegulations. ● Wrote layout and application code for eRegulations using Sass/CSS, HTML5 and JavaScript (Backbone.js, jQuery, and Require.js).
          </li>
          <li>
            Contributed to work on login.gov and data.gov using Python, Django, Flask and JavaScript, React. ● Contributed to other, more minor projects, using tools like New Relic, Mocha/Jasmine/Grunt and other JavaScript automated testing tools, and ingesting external APIs.
          </li>
          <li>
            Defined data standards for federal agencies to report software projects in accordance with White House open source adoption policies.
          </li>
        </ul>
        <h3>As a manager:</h3>
          <ul>
            <li>
              Led and mentored teams of up to six multidisciplinary engineers. 
            </li>
            <li>
              Held regular one-on-one meetings with team members to track and make progress on their individual career goals. 
            </li>
            <li>
              Coached team members who encountered productivity barriers. 
            </li>
            <li>
              Organized team meetings to discuss current projects and organizational issues. 
            </li>
            <li>
              Helped define the role and responsibilities of the new positions. 
            </li>
            <li>
              Collaborated to shape the organizational structure of a 55 person team of software engineers. 
            </li>
            <li>
              Coordinated quarterly 360 peer reviews.
            </li>
            <li>
              Conducted quarterly and annual performance evaluations. 
            </li>
            <li>
              Staffed projects with teams of engineers with appropriate and complementary skills.
            </li>
            <li>
              Interviewed candidates for engineering positions. 
            </li>
            <li>
              Created and ran the monthly 18F Tech Talks series.
            </li>
          </ul>
      </section>
    </main>
  )
}

export default JobList
