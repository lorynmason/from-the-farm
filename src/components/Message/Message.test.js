import React from 'react';
import { Message, mapDispatchToProps, mapStateToProps } from './Message';
import { shallow } from 'enzyme';
import { addMessage } from '../../actions';


describe('Message', () => {
  let mockFunc = jest.fn()
  let items = [{name: "Berries",
  id: 1}, {name: "Eggs",
  id: 11}]
  let user = {
    name: "Lemon Sisters",
    email: "regular@email.com",
    address: "12000 E. 47th Ave",
    phone: "(231) 341-4141",
    bio: "We Sell Lemons",
    lat: 39.7820535,
    long: -104.8503416,
    city: "denver",
    state: "CO",
    zip: 80239,
    img_url: null,
    token: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1NTA3MjM0OTZ9.az6Fs46yi1DL6u9J9cUWf3dt2aSbtsTHCNcTDGAQ-8k",
    products: [{name: "Broccoli",
    id: 9,
    user_id: 2,
    item_id: 2,
    price: 250,
    unit: "lb",
    description: "a lb of broccoli",
    vendorName: "Lemon Sisters"}]
  }
  let wrapper = shallow(<Message />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should match the snapshot if there is a message', () => {
    let message = 'There is a Messsage'
    wrapper = shallow(<Message message={message}/>)
    expect(wrapper).toMatchSnapshot()
  })
  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn()
    const mappedProps = mapDispatchToProps(mockDispatch)
  
    it('calls dispatch with an addMessage thunk when addMessage is called', () => {
      const expected = addMessage('You have a message');
      mappedProps.addMessage('You have a message')
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    });
  })
})