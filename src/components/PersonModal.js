import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import Map from './Map';
import {setSinglePersonView} from '../actions';
import './PersonModal.css';

class PersonModal extends React.Component {

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (this.node && !this.node.contains(e.target) && this.props.person)
      this.props.setSinglePersonView(null);
  }

  render() {
    const {person} = this.props;
    if(!person) return null;

    return (
      <div className="person-modal-backdrop">
        <div className="person-modal" ref={node => this.node = node}>
          <div className="person-modal-content">
            <h1>{person.firstname} {person.lastname}</h1>
            <button>Send contact request</button>
            <p><span>Status</span> {person.status}</p>
            <p><span>Subjects</span> {person.subjects.join(', ')}</p>
            <p><span>Email</span> {person.email}</p>
            <p><span>Phone</span> {person.phone}</p>
            {person.address && person.address.label && <p><span>Address</span> {person.address.label}</p>}
            <p><span>Gender</span> {person.gender}</p>
            <p><span>Joined Tutorific</span> {moment(person.createdAt).format('MMMM DD, YYYY')} ({moment(person.createdAt).fromNow()})</p>
            <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY')} ({moment(person.updatedAt).fromNow()})</p>
            {person.type === 'student' && <React.Fragment>
              {person.schooltype && <p><span>Schooltype</span> {person.schooltype} + school</p>}
              {person.grade && <p><span>Grade</span> {person.grade}</p>}
              {person.youthOrganization && <p><span>Youth Aid Organization</span> {person.youthOrganization}</p>}
            </React.Fragment>}
            {person.type === 'tutor' && <React.Fragment>
              {person.minStudentGrade && person.maxStudentGrade &&
                <p><span>Teaches grades</span> {person.minStudentGrade} - {person.maxStudentGrade}</p>}
              {person.fieldOfStudy && <p><span>Studies</span> {person.fieldOfStudy}</p>}
              {person.semester && <p><span>Semester</span> {person.semester}</p>}
            </React.Fragment>}
          </div>
          <Map list={[person]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.singlePersonView,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSinglePersonView: (person) => dispatch(setSinglePersonView(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonModal);