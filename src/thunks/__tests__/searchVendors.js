import { searchVendors } from '../searchVendors';
import { isLoading, hasErrored, vendorSearchResults, productSearchResults, addMessage } from '../../actions';
import { filterSearchResults } from '../../helpers/cleaner';
import { mockVendors } from '../../helpers/mockData';

describe('searchVendors', () => {
  let mockUrl;
  let mockDispatch;
  
  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('should dispatch isLoading(true)', () => {
    window.fetch = jest.fn();

    const thunk = searchVendors(mockUrl);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should invoke fetch with the correct args', () => {
    window.fetch = jest.fn();

    const thunk = searchVendors(mockUrl);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch hasErrored if the fetch does not resolve', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'there has been an error, Dave'
      });
    });

    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('there has been an error, Dave'));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'everything is not ok'
      });
    });

    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('everything is not ok'));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
      });
    });

    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch a message if there are no search results', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            data: []
          })
        }
      });
    });

    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addMessage('No Search Results'));
  });

  it('should dispatch vendorSearchResults with the correct args', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            data: mockVendors
          })
        }
      });
    });
    
    const expected = filterSearchResults(mockVendors);
    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(vendorSearchResults(expected.vendors));
  });

  it('should dispatch productSearchResults with the correct args', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve({
            data: mockVendors
          })
        }
      });
    });

    const expected = filterSearchResults(mockVendors);
    const thunk = searchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(productSearchResults(expected.products));
  });
});