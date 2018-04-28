import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {setSingleViewPerson} from '../actions';
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
      this.props.setSingleViewPerson(null);
  }

  render() {
    const {person} = this.props;
    if(!person) return null;

    return (
      <div className="person-modal-backdrop">
        <div className="person-modal" ref={node => this.node = node}>
          <h1>{person.firstname} {person.lastname}</h1>
          <p><span>Status</span> {person.status}</p>
          <p><span>Subjects</span> {person.subjects.map(subject => subject.name).join(', ')}</p>
          <p><span>Email</span> {person.email}</p>
          <p><span>Address</span> {person.address.city}</p>
          <p><span>Gender</span> {person.gender}</p>
          <p><span>Last login</span> {moment(person.updatedAt).format('MMMM DD, YYYY')}</p>        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.singleViewPerson,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSingleViewPerson: (person) => dispatch(setSingleViewPerson(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonModal);