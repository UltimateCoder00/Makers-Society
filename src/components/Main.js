import React from 'react'
import Points from './pages/Points';
import Voting from './pages/Voting';
import Manifesto from './pages/Manifesto';

import { Switch, Route } from 'react-router-dom'


import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Main extends React.Component {
  render() {
    return (
      <main className="container">
          <Switch>
            <Route exact path='/' component={Points}/>
            <Route path='/Voting' component={Voting}/>
            <Route path='/Points' component={Points}/>
            <Route path='/Manifesto' component={Manifesto}/>
          </Switch>
      </main>
    );
  }
}
