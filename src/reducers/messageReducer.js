const message = (state = '', action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return action.message;
    default: 
      return state;
  }
}

export default message;