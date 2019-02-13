import React, { Component } from 'react';

class Profile extends Component {
  constructor(){
    super()
    this.state = {
      showBio: true
    }
  }

  toggleInfo = () => {
    const { showBio } = this.state
    this.setState({
      showBio: !showBio
    })
  }

  render(){
    const { showBio } = this.state
    let info
    let button
    if (showBio) {
      info =  <p>Catalyze, scalable social innovation social intrapreneurship social capital effective altruism thought leader. NGO circular social entrepreneurship inspire; shared unit of analysis revolutionary corporate social responsibility equal opportunity emerging. Strengthening infrastructure movements cultivate, save the world co-creation; milestones dynamic mobilize technology. Collaborate, think tank, resist; best practices, radical strategize sustainable. Rubric.</p>
      button = 'Show Products'
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
      button = 'Show Bio'
    }
    return (
      <section className="profile">
        <h3>Mason Family Farm</h3>
        <h4>Hoodriver, OR</h4>
        <h4>masonfarm@gmail.com</h4>
        <button onClick={this.toggleInfo}>{ button }</button>
        { info }
      </section>
    )
  }
}

export default Profile;