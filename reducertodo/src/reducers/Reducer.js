import React from 'react';

export const initialState = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 0
  }
]

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newItem = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return[...state, newItem];
    
    case "MARKCOMPLETE":
      
      return[...state];

    case "REMOVECOMPLETE":

      return[...state];

    default:
      throw new Error('Nothing happened!');
  }
}
