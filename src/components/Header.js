import React from 'react'
import { Link } from 'react-router-dom'


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'


export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar pure-menu pure-menu-horizontal">
      <table className='navbar-table'><tr><td>
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/'>Home</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Points'>MakerPoints</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Voting'>Congress</Link></li>
            <li className="pure-menu-item"><Link className="pure-menu-link" to='/Manifesto'>Manifesto</Link></li>
        </ul>
        </td><td>
        <div className="navbar-image">
        <Link to='/'><img src='/mslogo.png' width='70px'/></Link>
        </div>
        </td></tr></table>
      </nav>
    );
  }
}
