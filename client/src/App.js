import React from 'react';
import './App.css';
import EventForm from './components/events/EventForm';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <EventForm />
      </div>
    </Provider>
  );
};

export default App;
