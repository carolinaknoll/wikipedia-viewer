import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Wikipedia Viewer</h1>
        <h2 className="subtitle">Explore the world's knowledge...</h2>
      </header>
    );
  }
}
