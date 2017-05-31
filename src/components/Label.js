import React from 'react'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Label extends React.Component {
 render() {
  if (this.props.hasLabel === 'true') {
   return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
  }
 }
}
