import { isLoading, hasErrored, addUser } from '../actions';
import { cleanUser } from '../helpers/cleaner'

export const fetchUser = (url, token) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false))
      const results = await response.json();
      const user = cleanUser(results.data, token);
      dispatch(addUser(user));
    } catch (error) {
      console.log(error)
      dispatch(hasErrored(error.message));
    }
  }
}