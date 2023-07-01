import LandingPage from './pages/LandingPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Manav`s portfolio"; // Change this to your desired title
  }, []);
  return (
   LandingPage()
  );
}

export default App;
