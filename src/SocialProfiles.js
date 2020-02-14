import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return (
      <span style={{ width: 60, margin: 10 }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="social-profile-waheed-afolabi"
            style={{ width: 40, height: 'auto' }}
          />
        </a>
      </span>
    );
  }
}

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        {SOCIAL_PROFILES.map(SOCIAL_PROFILE => (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            socialProfile={SOCIAL_PROFILE}
          />
        ))}
      </div>
    );
  }
}

export default SocialProfiles;
