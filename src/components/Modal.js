import React from 'react';
import { connect } from 'react-redux';

import { toggleModal } from '../redux/actions';
import './Modal.css';

class Modal extends React.Component {

  componentWillMount() {
    this.props.closeOnClickOutside
      && document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.node && !this.node.contains(event.target)) {
      const { dispatch, name} = this.props;
      dispatch(toggleModal(name));
    }
  }

  render() {
    const {modal, name, closebutton, toggleModal, children} = this.props;
    if (!modal) return null;
    return (
      <div ref={node => this.node = node} id={name + "-modal"}>
        {closebutton &&
          <button className='close-button' onClick={toggleModal}>
            &#10005;
          </button>}
        {children}
      </div>
    );
  }
}

const mapStateToProps = (state, {name}) => {
  return {
    modal: state.modals[name],
  };
};

export default connect(mapStateToProps)(Modal);