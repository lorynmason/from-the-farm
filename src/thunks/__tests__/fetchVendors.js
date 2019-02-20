import { fetchVendors } from '../fetchVendors';
import { isLoading, hasErrored, addVendors, addProducts, addItemList } from '../../actions';
import { mockVendors } from '../../helpers/mockData';
import { cleanVendors, cleanProducts, cleanItems } from '../../helpers/cleaner';

describe('fetchVendors', () => {
  let mockUrl;
  let mockDispatch;
  
  beforeEach(() => {
    mockUrl = 'www.someurl.com';
    mockDispatch = jest.fn();
  });

  it('should dispatch isLoading(true)', () => {
    window.fetch = jest.fn();

    const thunk = fetchVendors(mockUrl);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should invoke fetch with the correct args', () => {
    window.fetch = jest.fn();

    const thunk = fetchVendors(mockUrl);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch hasErrored if fetch does not resolve', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'there has been an error'
      });
    });

    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('there has been an error'));
  });

  it('should dispatch hasErrored if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'there is nothing here'
      });
    });

    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('there is nothing here'));
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });

    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch addVendors with an array of vendors', async () => {
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

    const expected = cleanVendors(mockVendors);
    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addVendors(expected));
  });

  it('should dispatch addProducts with an array of products', async () => {
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

    const expected = cleanProducts(mockVendors);
    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addProducts(expected));
  });

  it('should dispatch addItemList with an array of items', async () => {
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

    const mockProducts = cleanProducts(mockVendors);
    const expected = cleanItems(mockProducts);
    const thunk = fetchVendors(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addItemList(expected));
  });
});