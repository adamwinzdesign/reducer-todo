// import React from 'react';

export const initialState = [
  {
    todo: 'Learn about reducers',
    completed: false,
    id: Date.now()
  }
]

export const reducer = (state, action) => {
  // console.log('state in reducer:', state);
  switch (action.type) {
    case "ADD_TODO":
      return[...state, action.payload];
    
    case "COMPLETED_TODO":
      return state.map((item) => {
        if(item.id === action.payload) {
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
      });

    case "CLEAR_COMPLETED_TODO":
      const clearList = state.filter(item => item.completed === false);
      return clearList;

    default:
      return state;
      // throw new Error('Nothing happened!');
  }
}
