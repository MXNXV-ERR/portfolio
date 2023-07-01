import React from "react";
import logo from '.././assets/logo.svg';
const App=() =>
{
    return(
        <div>
        <header>
        <div className={`logo-container ${1 ? 'centered' : ''}`}>
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </header>
      <nav>
        {/* Navigation links */}
      </nav>
      <main>
        {/* Rest of your main content */}
      </main>
      <footer className="centered">
        <p>&copy; 2023 MXNXV-ERR. All rights reserved.</p>
      </footer>
      </div>
    );
}

export default App;