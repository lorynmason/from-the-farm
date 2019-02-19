import { rootReducer } from '../index';

describe('rootReducer', () => {
  it('should match snapshot', () => {
    expect(rootReducer).toMatchSnapshot();
  });
});