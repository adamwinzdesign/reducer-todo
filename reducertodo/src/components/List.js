import React from 'react';
import ListItem from './ListItem';

const List = props => (
  <div>
    <div>{props.list.map((element, index) => {
      return <ListItem key={index} index={index} toDo={element} />;
    })}
    </div>
  </div>
)

export default List;