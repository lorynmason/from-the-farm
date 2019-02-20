import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { mockUser } from '../../helpers/mockData'

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login user={mockUser}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})