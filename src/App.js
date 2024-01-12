import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://muhnuraqsalaminullah-v2.vercel.app/"
    }, 500)

    return () => clearTimeout(redirectTimeout)
  }, [])
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
