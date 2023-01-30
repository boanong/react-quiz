import React from 'react';
import { Link } from 'react-router-dom';
import './Landingpage.css';

function Landing() {
  return (
    <div className="whole">
      <div className="header">
        <h3 className="the">The</h3>
        <h1 className="rebase">
          Rebase Quiz <span className="hub">HUB</span>
        </h1>
      </div>

      <div className="subpage">
        Ready to flex your musles with a few questions? Let&apos;s go!
        <br />
        <Link to="/question">
          <button className="get-started" type="button">
            Get Started{' '}
          </button>
        </Link>
      </div>
      <p>
        {' '}
        <Link to="/question">Question</Link>
      </p>
      <p>
        {' '}
        <Link to="/resultpage">Results</Link>
      </p>
    </div>
  );
}

export default Landing;
