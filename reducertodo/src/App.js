import React, { useReducer, useState } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/Reducer';

import Form from './components/Form';
import List from './components/List';

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);
  const [item, setItem] = useState('');

  const handleCompleted = (toDo) => {
    dispatch({ type: 'TOGGLE', payload: toDo.id })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: item })
    setItem('');
  }

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR' })
  }

  const handleChange = (e) => {
    setItem(e.target.value);
  }

  return (
    <div className="App">
      <h1>Welcome to the React/Reducer ToDo!</h1>
      <Form handleChange={handleChange} item={item} handleSubmit={handleSubmit} handleClear={handleClear} />
      <List handleCompleted={handleCompleted} list={list}/>
    </div>
  );
}

export default App;
