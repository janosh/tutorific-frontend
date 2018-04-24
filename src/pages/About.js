import React from 'react';

import './About.css';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div id="about-page">
        <h1><strong>Tutorific</strong></h1>
        <h2>Result of the 6-day solo project at Codeworks, Barcelona</h2>
        <div className="about-tiles">
          <div className="about-tile purpose">
            <h3>Purpose</h3>
            <p><strong>Tutorific</strong> provides a platform to connect children from underprivileged families struggling in school with university students willing to provide free tuition.</p>
          </div>
          <div className="about-tile use-case">
            <h3>Use case</h3>
            <p>When a youth aid organization or parent signs up a child, it is <strong>Tutorific</strong>'s mission to find a tutor</p>
            <ul>
              <li>capable of providing support in the required subjects (at that grade level and school type)</li>
              <li>capable of accommodating possible special needs of the child (language barriers, disabilities, higher meeting interval due to approaching examinations)</li>
              <li>living sufficiently closely for the child and student to meet once or twice a week at the child’s home or a public space</li>
            </ul>
          </div>
          <div className="about-tile tutor-motivation">
            <h3>Tutor motivation</h3>
            <p>Students will usually sign up to work as tutors for free for one or more of the following reasons:</p>
            <ul>
              <li>become a better educator and communicator</li>
              <li>earn a certificate of their volunteer work (hours, numbers of children taught, possibly reviews from parents)</li>
              <li>acquire entrepreneurial or leadership skills by joining <strong>Tutorific</strong> on the organizational, marketing, developmental or executive level</li>
              <li>earn ‘good karma’</li>
            </ul>
          </div>
          <div className="about-tile tutor-signup">
            <h3>Student sign up</h3>
            <p>When signing up a child, the youth aid organization or parents provide</p>
            <ul>
              <li>firstname*</li>
              <li>lastname</li>
              <li>gender*</li>
              <li>age*</li>
              <li>grade level*</li>
              <li>type of school (elementary, middle, high, special needs, vocational, refugee, etc.)*</li>
              <li>problematic subject(s) (Math, Physics, English, Spanish, French, History, Biology, etc.)*</li>
              <li>email</li>
              <li>phone</li>
              <li>physical address/place where tutoring should take place (in case of privacy concerns, it suffices to specify city district)*</li>
              <li>person to contact in case of successful connection to student (e.g. parent or guardian)*
              <ul>
                <li>name*</li>
                <li>email*</li>
                <li>phone</li>
                <li>aid organization</li>
              </ul>
              </li>
            </ul>
          </div>
          <div className="about-tile student-signup">
          <h3>Tutor sign up</h3>
          <p>When students sign up, they provide</p>
          <ul>
            <li>firstname*</li>
            <li>lastname*</li>
            <li>gender*</li>
            <li>email*</li>
            <li>phone</li>
            <li>physical address/place where tutoring should take place (in case of privacy concerns, it suffices to specify city district)*</li>
            <li>field of study</li>
            <li>semester count</li>
            <li>subjects they can teach (optionally with grade level, default all grades)*</li>
            <li>types of school they can cover*</li>
            <li>for volunteer certificate
            <ul>
              <li>date of birth</li>
              <li>place of birth</li>
              <li>physical address</li>
            </ul>
            </li>
          </ul>
          </div>
          <div className="about-tile techstack">
          <h3>Tech Stack</h3>
          <h4>Frontend</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
          </ul>
          <h4>Backend</h4>
          <ul>
            <li>Koa</li>
            <li>MongoDB (Mongoose)</li>
          </ul>
          </div>
          <div className="about-tile models">
            <h3>Models</h3>
            <h4>Tutors &amp; students</h4>
            <p>The tutor and student schemas include all the fields listed in their respective sign up sections (required if marked by an asterisk). Additionally, both will need to contain a field to hold references to documents of the <strong>connection</strong> schema that tracks the history of relations between students and tutors.</p>
            <h4>Connections</h4>
            <p>The connection schema provides the following fields:</p>
            <ul>
              <li>reference to student document</li>
              <li>reference to tutor document</li>
              <li>start date of relation</li>
              <li>(initially empty) end date of relation</li>
              <li>subjects taught in this connection</li>
              <li>status: active</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}