import React from 'react';
import './Footer.scss';

export function Footer() {
  return (
    <footer data-testid="footerTest" className="footer">
      <div className="container">
        <div className="creator-block">
          <div data-testid="creatorBlockName" className="creator-block__name">Pavel Chechelev</div>
          <div className="creator-block__github">
            <a data-testid="creatorBlockGitHub" className="github-link" href="https://github.com/Chechelev">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};