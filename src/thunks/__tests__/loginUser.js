import { loginUser } from '../loginUser';
import { isLoading, hasErrored } from '../../actions';
import { fetchUser } from '../fetchUser';

jest.mock('../fetchUser.js');

describe('loginUser', () => {
  let mockUrl;
  let mockDispatch;
  const mockState = {
    email: 'hello@goodbye.com',
    password: 'nunya'
  }

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('should dispatch isLoading(true)', () => {
    window.fetch = jest.fn();

    const thunk = loginUser(mockUrl);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should invoke fetch with the correct args', () => {
    window.fetch = jest.fn();

    const expected = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: mockState.email,
        password: mockState.password
      })
    }

    const thunk = loginUser(mockUrl, mockState);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expected);
  });

  it('should dispatch hasErrored if fetch does not resolve', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'this is my error'
      });
    });

    const thunk = loginUser(mockUrl, mockState);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('this is my error'));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false, 
        statusText: 'it is not your error'
      });
    });

    const thunk = loginUser(mockUrl, mockState);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('it is not your error'));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });

    const thunk = loginUser(mockUrl, mockState);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch fetchUser with a url', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            auth_token: 'token',
            user: {
              id: 5
            }
          })
        }
      });
    });

    const expected = 'https://xpoll-be.herokuapp.com/api/v1/users/5'
    const thunk = loginUser(mockUrl, mockState);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchUser(expected, 'token'));
  });
});