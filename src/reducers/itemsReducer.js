export const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_LIST':
      return action.items;
    default:
      return state;
  }
}
