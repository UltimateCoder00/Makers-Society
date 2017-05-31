import React from 'react'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Button extends React.Component {

  render() {

    return (
      <fieldset className='form-button-field'>
         <button className='form-button'
          type={this.props.type || 'button'}
          value={this.props.value || null}
         >
         {this.props.text}
         </button>
       </fieldset>
    );
  }
}
