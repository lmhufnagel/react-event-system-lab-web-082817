// Code Keypad Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Keypad extends React.Component {
  handleInputPassword = () => console.log('Entering password...')

    render(){
      return(
        <div>
          <input
            type="password"
            onKeyUp={this.handleInputPassword}
          />
      </div>
      )
    }

}
