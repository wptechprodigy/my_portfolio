import React, { Component } from 'react';

class App extends Component {
  state = {
    displayBio: false,
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Waheed. I'm a software engineer.</p>
        <p>
          I'm always looking forward to working on meaningful
          better-life-enhancing projects.
        </p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Lagos, Nigeria and code every day.</p>
            <p>
              My favourite language is Javascript, and I also do Rust as well as
              GO.
            </p>
            <p>
              Besides coding, I am a loving father. I love to read, play soccer
              and watch movies!
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
