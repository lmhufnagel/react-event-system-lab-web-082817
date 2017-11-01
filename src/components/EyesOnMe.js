// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  onFocus = () => {console.log('Good!')}
  onBlur = () => {console.log('Hey! Eyes on me!')}

    render(){
      return (
        <div>
          <button
          onBlur={this.onBlur}
          onFocus={this.onFocus}>
          Click me!
          </button>
        </div>
      )
    }

}
