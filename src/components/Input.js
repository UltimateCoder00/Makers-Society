import React from 'react'
import Label from './Label'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Input extends React.Component {

 render() {
  return (
   <fieldset className="input-row">
    <Label
     hasLabel={this.props.hasLabel}
     htmlFor={this.props.htmlFor}
     label={this.props.label}
    />
    <br/>
     <input className='input-field'
      onChange={this.props.onChange || null}
      id={this.props.htmlFor}
      max={this.props.max || null}
      min={this.props.min || null}
      name={this.props.name || null}
      placeholder={this.props.placeholder || null}
      required={this.props.required || null}
      step={this.props.step || null}
      type={this.props.type || 'text'}

     />
   </fieldset>
  );
 }
}
