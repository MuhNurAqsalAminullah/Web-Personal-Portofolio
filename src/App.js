import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useEffect } from 'react';

import { toast } from 'react-toastify';

function App() {
  const notify = () => toast.info("Anda akan dialihkan ke portofolio yang baru", {
    autoClose: 2000
  });

  useEffect(() => {
    notify()
    const redirectTimeout = setTimeout(() => {
      window.location.href = "https://muhnuraqsalaminullah-v2.vercel.app/"
    }, 6000)

    return () => clearTimeout(redirectTimeout)
  }, [])
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
