import React from 'react';

import './About.css';

export default class AboutPage extends React.Component {
  render() {
    return (
      <div id="about-page">
        <div id="about-page-title">
          <h1>Tutorific</h1>
          <h2>6-day solo project at Codeworks, Barcelona</h2>
        </div>
        <section className="purpose">
            <h3>Purpose</h3>
            <p><strong>Tutorific</strong> provides a platform to connect children from underprivileged families struggling in school with university students willing to provide free tuition.</p>
          </section>
          <section className="use-case">
            <h3>Use case</h3>
            <p>When a youth aid organization or parent signs up a child, it is <strong>Tutorific</strong>'s mission to find a tutor</p>
            <ul>
              <li>capable of providing support in the required subjects (at that grade level and school type)</li>
              <li>capable of accommodating possible special needs of the child (language barriers, disabilities, higher meeting interval due to approaching examinations)</li>
              <li>living sufficiently closely for the child and student to meet once or twice a week at the child’s home or a public space</li>
            </ul>
          </section>
          <section className="tutor-motivation">
            <h3>Tutor motivation</h3>
            <p>Students will usually sign up to work as tutors for free for one or more of the following reasons:</p>
            <ul>
              <li>become a better educator and communicator</li>
              <li>earn a certificate of their volunteer work (hours, numbers of children taught, possibly reviews from parents)</li>
              <li>acquire entrepreneurial or leadership skills by joining <strong>Tutorific</strong> on the organizational, marketing, developmental or executive level</li>
              <li>earn ‘good karma’</li>
            </ul>
          </section>
      </div>
    );
  }
}