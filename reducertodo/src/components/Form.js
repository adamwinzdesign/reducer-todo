import React, { useState } from 'react';

const Form = props => {
  const [form, setForm] = useState('');

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      props.addTodo(form)
      setForm('')
    }}>
      <input 
        name='todo'
        placeholder='What We Do?'
        value={form}
        onChange={(event) => {
          setForm(event.target.value)
        }}
      />
      <button type='submit'>Add ToDo Item</button>
    </form>
  )
}

export default Form;
