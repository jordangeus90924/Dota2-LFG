import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../../css/fountain.css'

//The Fountain is a reference to the home base in Dota 2.

class Fountain extends Component {
  render() {
    return (
      <section className="fountainContainer">
        <img src="/images/linaandmaiden.png"/>
        <div className="fountain">
          <div className="header">
            <p className="title">Dota 2&nbsp; 
              <span className="L">L</span>
              <span className="F">F</span>
              <span className="G">G</span></p>
            <p className="secondP">Looking for the perfect group? 😍</p>
          </div>
          <div className="info">
            <p className="tools">Dota 2 LFG gives you the tools you need to find a group just to your liking!</p>
            <p className="tools">Login below or click help for more information. Thanks for stopping by!</p>
          </div>
          <div className="buttons">
            <Button bsStyle="danger">Find a group!</Button>
            <Button bsStyle="success">About Dota 2 LFG</Button>
            <Button bsStyle="primary">Contribute</Button>
          </div>
          <p className="poweredBy">Powered by <span className="opendotaBrand"><a target="_blank" href="https://www.opendota.com">{'\<OPENDOTA\/\>'}</a></span></p>
        </div>
        <div className="lfgInfo createAGroup">
          <div>
            <p className="infoHeader">Create a Group</p>
            <p>
              Use the Group Maker to create a group exactly how you want it. Want to play
              only with serious players who are looking to make a team? Choose Looking for
              Teammates or Winners Only. Or maybe you're looking to kill Roshan before the horn, so
              you choose Crazy Strats. Create whatever kind of group you can imagine!
            </p>
          </div>
          <img src="images/groupmaker.png"/>
        </div>
        <div className="lfgInfo joinAGroup">
        <img className="joinImg1" src="images/group.png"/>
          <div>
            <p className="infoHeader">Join a Group</p>
            <div>
              <p>
              You can join a group by clicking on a hero portrait in
              one of the groups listed. You can only join one group at a time, but you can join one
              while waiting for others to join your own group. Ultimately, just like when picking a hero,
              you'll have to decide on one!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Fountain;