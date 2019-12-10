import React from 'react';

const Form = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        name='form'
        placeholder='What needs to be done?'
        value={props.item}
        onChange={props.handleChange}
      />

      <div>
        <button type='submit'>Add ToDo Item to List</button>
        <button type='button' onClick={props.handleClear}>Remove Completed Items from List</button>
      </div>
    </form>
  </div>
)

export default Form;
