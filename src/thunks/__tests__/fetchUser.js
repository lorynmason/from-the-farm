import { fetchUser } from '../fetchUser';
import { isLoading, hasErrored, addUser } from '../../actions';
import { mockUser } from '../../helpers/mockData';
import { cleanUser } from '../../helpers/cleaner';

describe('fetchUser', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('should dispatch isLoading with true', () => {
    window.fetch = jest.fn();

    const thunk = fetchUser(mockUrl);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'an error has occurred'
      });
    });
    
    const thunk = fetchUser(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('an error has occurred'));
  });

  it('should call fetch with the correct args', () => {
    window.fetch = jest.fn();

    const thunk = fetchUser(mockUrl);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch isLoading with false', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockUser
        })
      });
    });

    const thunk = fetchUser(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch addUser with a user if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          data: mockUser
        })
      });
    });

    const expected = cleanUser(mockUser)

    const thunk = fetchUser(mockUrl);
    await thunk(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(addUser(expected));
  });
});