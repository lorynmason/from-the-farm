import { isLoading, addMessage, hasErrored } from '../actions';

export const postItem = (url, item, userToken) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${userToken}`
        },
        body: JSON.stringify(item)
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false));
      const results = await response.json();
      const newItem = results.data.attributes;
      dispatch(addMessage(`Successfully added ${newItem.name} at ${newItem.price} per ${newItem.unit}`));
    } catch(error) {
      dispatch(hasErrored(error.message));
      dispatch(addMessage('Unable to add product'));
    }
  }
}