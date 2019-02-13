import React, { Component } from 'react';
import './App.css';

import { playerRatings, generateTeams } from './team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayersRatings: playerRatings,
      generated: false
    };
  }

  removePlayer = playerName => {
    const currentPlayersRatings = this.state.currentPlayersRatings;
    delete currentPlayersRatings[playerName];
    this.setState({
      currentPlayersRatings
    });
  };

  generateTeams = () => {
    const { team1, team2 } = generateTeams(this.state.currentPlayersRatings);
    this.setState({
      generated: true,
      team1,
      team2
    });
  };

  render() {
    const playerNames = Object.keys(this.state.currentPlayersRatings);
    const teamSize = Math.floor(playerNames.length / 2);

    return (
      <div className="App">
        <header className="App-header">
          <div className="Section-Header">Player List</div>
          <div>
            {playerNames.map(pName => (
              <div>
                <div>
                  {pName}
                  <a
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => this.removePlayer(pName)}
                  >
                    {' '}
                    &nbsp;&nbsp;X
                  </a>
                </div>
                <br />
              </div>
            ))}
          </div>

          <br />
          <br />

          <button className="generate" onClick={this.generateTeams}>
            Generate Teams
          </button>
          <br />
          {this.state.generated && (
            <div>
              <div className="Section-Header">Team1</div>
              {this.state.team1.map(pName => (
                <div>{pName}</div>
              ))}
              <br />
              <div className="Section-Header">Team2</div>
              {this.state.team2.map(pName => (
                <div>{pName}</div>
              ))}
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
