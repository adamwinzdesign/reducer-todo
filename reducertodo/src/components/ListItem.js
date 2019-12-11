import React from 'react';

const ListItem = props => (
  <div>
    <p className={props.item.completed ? 'completed' : ''}
      onClick={(event) => {
        event.preventDefault()
        console.log('item clicked!')
        props.handleComplete(props.item.id)
      }}
    >{props.item.todo}</p>
  </div>
)

export default ListItem;
