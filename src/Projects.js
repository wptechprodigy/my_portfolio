import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
  render() {
    const { title, description, image, link } = this.props.project;

    return (
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 250, height: 150 }} />
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map(PROJECT => (
            <Project key={PROJECT.id} project={PROJECT} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
