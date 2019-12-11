// import React from 'react';

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 0
  }
]

export const reducer = (state, action) => {
  console.log('state in reducer:', state);
  switch (action.type) {
    case "ADD":
      const newItem = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return[...state, newItem];
    
    case "TOGGLE":
      return state.map((item, index) => {
        if(item.id === action.payload) {
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
      });

    case "CLEAR":
      const clearList = state.filter(item => item.completed === false);
      return clearList;

    default:
      throw new Error('Nothing happened!');
  }
}
