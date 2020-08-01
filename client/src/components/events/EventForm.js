import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEvent } from '../../actions/event';

const EventForm = ({ addEvent }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eventName: '',
    eventDesc: '',
    date: '',
  });

  const { firstName, lastName, email, eventName, eventDesc, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addEvent({ firstName, lastName, email, eventName, eventDesc, date });
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Event Name'
            name='eventName'
            value={eventName}
            onChange={(e) => onChange(e)}
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
            type='text'
            placeholder='Date'
            name='date'
            value={date}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' value='Add New Event' />
      </form>
    </div>
  );
};

EventForm.propTypes = {
  addEvent: PropTypes.func.isRequired,
};

export default connect(null, { addEvent })(EventForm);
