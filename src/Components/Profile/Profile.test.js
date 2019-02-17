import React from 'react';
import { Profile } from './Profile';
import { shallow } from 'enzyme';

describe('Profile', () => {
  const mockUser = {
    name: 'Mike',
    bio: 'A common pants wearer',
    address: '1234 Here St.',
    phone: '1234567',
    email: 'me@here.com',
    city: 'City',
    state: 'St',
    id: 2
  }
  it('should match the snapshot with no products', () => {
    const wrapper = shallow(<Profile user={mockUser} products={[]} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with products', () => {
    const mockProducts = [
      {name: 'carrots', id: 2},
      {name: 'lettuce', id: 5}
    ]

    const wrapper = shallow(<Profile user={mockUser} products={mockProducts} />);
    expect(wrapper).toMatchSnapshot();
  });
});