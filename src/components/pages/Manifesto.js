import React from 'react'
import ManifestoText from '../ManifestoText';
import ManifestoAgreement from '../ManifestoAgreement';

import '../../css/oswald.css'
import '../../css/open-sans.css'
import '../../css/pure-min.css'
import '../../App.css'

export default class Manifesto extends React.Component {
  render() {
    return (
        <div className="pure-g">
          <div className="pure-u-1-1">
          <div className="image-header">
            <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F28163006%2F132430602224%2F1%2Foriginal.jpg?s=5e6271228e750a48feb715b8f02e68a9" />
          </div>
            <div className="main-block">
            <ManifestoText />
            <ManifestoAgreement />
            </div>
          </div>
        </div>
    );
  }
}
