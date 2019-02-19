export const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_USER':
      return action.user;
    case 'REMOVE_USER': 
      return {};
    default: 
      return state;
  }
}

export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.bool;
    default:
      return state;
  }
}

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message;
    default:
      return state;
  }
}