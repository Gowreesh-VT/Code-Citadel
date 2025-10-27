import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <div className="feature-cards">
          <div className="feature-card">
            <svg viewBox="0 0 24 24" fill="currentColor" className="feature-icon-svg">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <h3>Ad-Free Music</h3>
            <p>Listen to unlimited songs without interruptions</p>
          </div>
          <div className="feature-card">
            <svg viewBox="0 0 24 24" fill="currentColor" className="feature-icon-svg">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
            </svg>
            <h3>High Quality Audio</h3>
            <p>Experience crystal clear HD sound quality</p>
          </div>
          <div className="feature-card mini">
            <h4>Free Plan</h4>
            <p>$0 • Forever</p>
            <ul>
              <li>Shuffle play</li>
              <li>Ad-supported</li>
              <li>Mobile streaming</li>
            </ul>
          </div>
          <div className="feature-card individual">
            <h4>Premium</h4>
            <p>₹10,000 • Monthly</p>
            <ul>
              <li>Ad-free music</li>
              <li>Offline downloads</li>
              <li>High quality audio</li>
              <li>Unlimited skips</li>
            </ul>
          </div>
          <div className="enhance-card">
            <div className="throne-icon">
              <svg viewBox="0 0 24 24" className="spotify-icon-enhance" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <div>
              <h2>Unlock Premium</h2>
              <p>Enjoy ad-free music, offline listening, and more.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-center">
        <h1 className="hero-title">
          Discover Millions of Songs
        </h1>
        <p className="hero-description">
          Experience music like never before. Stream your favorite tracks, discover new artists, and create the perfect playlist for every moment. Your soundtrack to life starts here.
        </p>
        <button className="cta-button" onClick={() => window.location.href = '/spookify/index.html'}>
          GET STARTED FREE
          <svg viewBox="0 0 24 24" fill="currentColor" className="arrow-icon-svg">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
        <div className="user-stats">
          <div className="user-avatars">
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <div className="avatar-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
          </div>
          <p>500+ million<br />music lovers worldwide</p>
        </div>
      </div>

      <div className="hero-right">
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="phone-header">
              <svg viewBox="0 0 24 24" className="spotify-icon" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span>Trending Now</span>
            </div>
            <div className="phone-content">
              <h3>Popular Playlists</h3>
              <div className="playlist-grid">
                <div className="playlist-card">
                  <img src="https://i5.walmartimages.com/seo/The-Collection-Rock-Classics-The-Ultimate-Rock-Anthems-CD_fc2377c9-a417-4347-8fed-516aadbee9a5_3.d7f7ba2a7810386e4a65ea0d85fbd921.jpeg" alt="Rock Classics"/>
                  <div className="card-overlay">
                    <span className="card-title">Rock Classics</span>
                  </div>
                </div>
                <div className="playlist-card">
                  <img src="https://picsum.photos/seed/chill/200" alt="Chill Vibes"/>
                  <div className="card-overlay">
                    <span className="card-title">Chill Vibes</span>
                  </div>
                </div>
              </div>
              <h3>Top Artists</h3>
              <div className="artist-grid">
                <div className="artist-card">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.2-T_ndhSHRBNn4eKeiVRswHaG1?pid=Api&P=0&h=180" alt="The Weeknd"/>
                  <div className="card-overlay">
                    <span className="house-name">The Weeknd</span>
                    <span className="house-motto">Pop • R&B</span>
                  </div>
                </div>
                <div className="artist-card">
                  <img src="https://tse1.mm.bing.net/th/id/OIP.vC84hS1ykYCwyLW0x1XV0wHaE2?pid=Api&P=0&h=180" alt="Billie Eilish"/>
                  <div className="card-overlay">
                    <span className="house-name">Billie Eilish</span>
                    <span className="house-motto">Alternative</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-player">
              <div className="now-playing">
                <div className="album-art">
                  <img src="https://picsum.photos/seed/blinding/100" alt="Album Art"/>
                </div>
                <div>
                  <div className="song-title">Blinding Lights</div>
                  <div className="artist-name">The Weeknd</div>
                </div>
              </div>
              <div className="player-controls">
                <button>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
