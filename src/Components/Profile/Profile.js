import React, { Component } from 'react';

class Profile extends Component {
  constructor(){
    super()
    this.state = {
      active: 'bio'
    }
  }

  toggleInfo = () => {
    this.setState({
      active: 'profile'
    })
  }

  render(){
    const { active } = this.state
    let info
    if ( active === 'bio') {
      info =  <p>Catalyze, scalable social innovation social intrapreneurship social capital effective altruism thought leader. NGO circular social entrepreneurship inspire; shared unit of analysis revolutionary corporate social responsibility equal opportunity emerging. Strengthening infrastructure movements cultivate, save the world co-creation; milestones dynamic mobilize technology. Collaborate, think tank, resist; best practices, radical strategize sustainable. Rubric.</p>
    } else {
      info = <table>
          <tr>
            <th>Product</th>
            <th>Price</th> 
            <th>Unit</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>Carrots</td>
            <td>5</td> 
            <td>lbs</td>
            <td>Organic, multi-color</td>
          </tr>
          <tr>
            <td>Apples</td>
            <td>5</td> 
            <td>lbs</td>
            <td>Organic, pink lady</td>
          </tr>
      </table>
    }
    return (
      <section className="profile">
        <h3>Mason Family Farm</h3>
        <h4>Hoodriver, OR</h4>
        <h4>masonfarm@gmail.com</h4>
        <button onClick={this.toggleInfo}>Products</button>
        { info }
      </section>
    )
  }
}

export default Profile;