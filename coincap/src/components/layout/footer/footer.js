import React from 'react';
import './footer.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="creator-block">
          <div className="creator-block__name">Pavel Chechelev</div>
          <div className="creator-block__github">
            <a className="github-link" href="https://github.com/Chechelev">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};