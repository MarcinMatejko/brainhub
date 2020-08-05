import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';
import Modal from 'react-modal';

const EventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventName: '',
    eventDesc: '',
    eventDate: '',
  });

  const {
    firstName,
    lastName,
    email,
    eventName,
    eventDesc,
    eventDate,
  } = formData;

  const [modalIsOpen, setModaliSopen] = useState(false);
  Modal.setAppElement('#root');

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addEvent({ firstName, lastName, email, eventName, eventDesc, eventDate });
    setModaliSopen(true);
  };

  return (
    <div className='event-form'>
      <h1 className='header'>Create Your event</h1>
      <form onSubmit={(e) => onSubmit(e)} className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Event Name'
            name='eventName'
            value={eventName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Event Description'
            name='eventDesc'
            value={eventDesc}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='date'
            placeholder='Date'
            name='eventDate'
            value={eventDate}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='Add New Event' />
        </div>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModaliSopen(false)}
        className='Modal'
        overlayClassName='Overlay'
      >
        <h2 className='modal-header'>Your event has been created.</h2>
        <button className='btn-modal' onClick={() => setModaliSopen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(EventForm);
