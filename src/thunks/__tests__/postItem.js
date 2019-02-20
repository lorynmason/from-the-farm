import { postItem } from '../postItem';
import { isLoading, addMessage, hasErrored } from '../../actions';

describe('postItem', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('should dispatch isLoading(true)', () => {
    window.fetch = jest.fn();

    const thunk = postItem(mockUrl, {}, "token");
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should invoke fetch with the correct args', () => {
    window.fetch = jest.fn();

    const expected = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer token`
      },
      body: JSON.stringify({})
    }

    const thunk = postItem(mockUrl, {}, "token");
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, expected);
  });

  it('should dispatch hasErrored and addMessage if fetch does not resolve', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'there was an error'
      });
    });

    const thunk = postItem(mockUrl, {}, "token");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('there was an error'));
    expect(mockDispatch).toHaveBeenCalledWith(addMessage('Unable to add product'));
  });

  it('should dispatch hasErrored and addMessage if the response is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'there was another error'
      });
    });

    const thunk = postItem(mockUrl, {}, "token");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('there was another error'));
    expect(mockDispatch).toHaveBeenCalledWith(addMessage('Unable to add product'));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });

    const thunk = postItem(mockUrl, {}, "token");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch addMessage with the correct args', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            data: {
              attributes: {
                name: 'carrots',
                price: 500,
                unit: 'lb'
              }
            }
          })
        }
      });
    });

    const expected = 'Successfully added carrots at 500 per lb';
    const thunk = postItem(mockUrl, {}, "token");
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addMessage(expected));
  });
});