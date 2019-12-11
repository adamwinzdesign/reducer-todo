import React from 'react';
import ListItem from './ListItem';

const List = props => (
  <div>
    <div>{props.state.map((item) => {
      return <ListItem key={item.id} item={item} handleComplete={props.handleComplete}/>;
    })}
    </div>
  </div>
)

export default List;