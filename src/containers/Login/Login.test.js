import React from 'react';
import { Login } from './Login';
import { shallow } from 'enzyme';
import { mockUser } from '../../helpers/mockData'

describe('Login', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login user={mockUser} loginUser={jest.fn()}/>)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('handleChange', () => {
    it('should handle change', () => {
      expect(wrapper.state()).toEqual({
        email: '',
        password: '',
        name: '',
        password_confirmation: '',
        account_type: "vendor",  
        address: '',
        city: '',
        state: '',
        phone: '',
        zip: '',
        bio: '',
        img_url: '',
        newUser: false
      });

      wrapper.find('.login').simulate('change', {'target': {name: 'email', value: 'something@gmail.com'}});
      wrapper.find('.login').simulate('change', {'target': {name: 'password', value: 'grapes'}});
      

      expect(wrapper.state()).toEqual({
        email: 'something@gmail.com',
        password: 'grapes',
        name: '',
        password_confirmation: '',
        account_type: "vendor",  
        address: '',
        city: '',
        state: '',
        phone: '',
        zip: '',
        bio: '',
        img_url: '',
        newUser: false
      });
    })
  })
  describe('handleSubmit', () => {
    it('should call loginUser', () => {
      wrapper.find('.login').simulate('submit', {preventDefault: jest.fn()});
      expect(wrapper.instance().props.loginUser).toHaveBeenCalled()
    })
  })
})