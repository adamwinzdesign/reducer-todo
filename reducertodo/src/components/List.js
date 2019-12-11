import React from 'react';
import ListItem from './ListItem';

const List = props => (
  <div className='listContain'>{props.state.map((item) => {
    return <ListItem key={item.id} item={item} handleComplete={props.handleComplete}/>;
  })}
  </div>
)

export default List;