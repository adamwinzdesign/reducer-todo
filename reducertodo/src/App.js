import React, { useReducer, useState } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/Reducer';

import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the React/Reducer ToDo!</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
