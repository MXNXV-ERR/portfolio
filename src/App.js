import PortfolioPage from './PortfolioPage';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Manav`s portfolio"; // Change this to your desired title
  }, []);
  return (
   PortfolioPage()
  );
}

export default App;