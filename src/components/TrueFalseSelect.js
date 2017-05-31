import React from 'react'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class TrueFalseSelect extends React.Component {

  render() {
    return (
          <select className='form-button'>
            <option value="true">For</option>
            <option value="false">Against</option>
          </select>
    );
  }
}
