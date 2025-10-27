import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">For the Record</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Communities</h4>
          <ul>
            <li><a href="#">For Artists</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Vendors</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Support</a></li>
            <li><a href="#">Web Player</a></li>
            <li><a href="#">Free Mobile App</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8A3.6 3.6 0 0020 16.4V7.6A3.6 3.6 0 0016.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"></path></svg></a>
          <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.71 0-1.37-.22-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.94.07 4.28 4.28 0 004 2.98-8.52 8.52 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.99-2.08z"></path></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 3a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12zm0 2H6a1 1 0 00-1 1v12a1 1 0 001 1h6V11h-2v-2h2V7a3 3 0 013-3h2v2h-2a1 1 0 00-1 1v2h3v2h-3v8h3a1 1 0 001-1V6a1 1 0 00-1-1z"></path></svg></a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Legal</a>
          <a href="#">Safety & Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
          <a href="#">About Ads</a>
          <a href="#">Accessibility</a>
        </div>
        <div className="footer-copyright">
          <span>&copy; 2024 Spotify AB</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
