import { isLoading, hasErrored } from '../actions';
import { fetchUser } from './fetchUser'

export const postUser = (url, state) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
          name: state.name,
          password_confirmation: state.password_confirmation,
          account_type: state.account_type,  
          address: state.address,
          city: state.city,
          state: state.state,
          phone: state.phone,
          zip: state.zip,
          img_url: state.img_url,
          bio: state.bio
        })
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(isLoading(false))
      const results = await response.json();
      dispatch(fetchUser(`https://xpoll-be.herokuapp.com/api/v1/users/${results.user.id}`, results.auth_token)) 
    } catch (error) {
      dispatch(hasErrored(error.message));
    }
  }
}