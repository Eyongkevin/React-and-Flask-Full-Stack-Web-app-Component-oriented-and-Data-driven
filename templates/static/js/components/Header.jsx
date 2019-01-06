import React, { Component } from 'react';
 export default class Header extends Component {
  render() {
    return (
       <div className='header-page'>
          <img className='ui logo image' src={this.props.logo} />
          <span className='header'>
              Medium Articles
          </span>
       </div>
    );
  }
}
