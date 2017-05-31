import React from 'react'

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class ManifestoText extends React.Component {

  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="main-block">
        <h2>Who we are</h2>

        <p>We are Makers. We are a diverse and global community of software developers both current and former, who share a key set of values and goals. Collaboration, integrity and trust are uniting forces throughout our community, as is the maxim that ‘Once a Maker, always a Maker’. Each member of our community has a peer and an ally in every other member.</p>

        <h2>Purpose of Makers Society</h2>

        <p>Our goal is to build an online platform through which our community worldwide can function as a society. This platform will hold the Makers’ values at its heart. In particular, it will feature a cryptocurrency which rewards community contribution, and it will facilitate the ability to vote on important issues. Makers Society will function autonomously through its members, ensuring that its direction and future is decided by those for whom it is most important.</p>

        <h2>Community Values</h2>

        <h3>We are a diverse and welcoming community</h3>

        <p>Makers Society welcomes people from all walks of life who have a passion for code and who live the Makers Values. Our door is open to all people, and we strive to make our society an inclusive and safe environment for all.</p>

        <h3>We are committed to others</h3>

        <p>Rewards are distributed within Makers Society on the basis of helping other members of the community. A strong commitment to helping fellow Makers is a core part of what makes our community strong. This can include any kind act, such as refilling the water cooler, providing counselling, or lending your Mac charger.</p>

        <h3>We value integrity</h3>

        <p>Openness and honesty are what allows our society to function autonomously, through its members. Members are trusted to work through disagreements rationally and fairly, and to communally agree on when a fellow Maker is deserving of appreciation or support.</p>

        <h3>We are collaborative</h3>

        <p>Pair programming is inherent in learning to code at Makers. By extension, Makers achieve goals through mutual support and collaboration.  All our code is open source and written with the next developer in mind.</p>

        <h3>Trust and autonomy</h3>

        <p>Trust, cooperation and accuracy of information are essential to making decisions with the best interests of the community at heart. Makers Society is a democracy, and as such members are trusted to act in the best interests of the community. That's why we operate on the blockchain, an open, transparent, and egalitarian technology.</p>
      </div>
    )
  }

}
