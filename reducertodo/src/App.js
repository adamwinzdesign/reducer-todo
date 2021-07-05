import React, { useReducer } from 'react';
import './App.css';

import { initialState, reducer } from './reducers/Reducer';

import Form from './components/Form';
import List from './components/List';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false, 
      id: Date.now()
    }
    dispatch({ type: 'ADD_TODO', payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({ type: 'COMPLETED_TODO', payload: id})
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED_TODO'})
  }

  return(
    <div className="App">
      <List state={state} handleComplete={handleComplete} />
      <Form addTodo={addTodo} />
      <button onClick={(event) => {
        event.preventDefault()
        clearCompleted()
      }}>Clear Completed Items!</button>
    </div>
  );
}

export default App;
