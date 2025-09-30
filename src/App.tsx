import { useState, useEffect } from 'react'
import './App.css'
import {Form} from './components/Form.tsx';
import PixelPerfect from './components/PixelPerfect.tsx';

function App() {
  const [formData, setFormData] = useState({
    url: 'https://i.imgur.com/O89vfci.jpeg',
    width: 800,
    borderWidth: 5,
    borderColor: '#007bff'
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  console.log(formData.width)
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <div>
      <button 
        onClick={toggleTheme} 
        className={`theme-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️' : '🌒'}
      </button>
      <Form onChange={handleFormChange} />
      <PixelPerfect width={formData.width} src={formData.url} border={formData.borderWidth} borderColor={formData.borderColor} />
      <hr />
      <footer className=' container row'>
        <p className="text-right col-md-6 col-sm-12">Created by János Balogh - Class 13.E</p>
      </footer>
    </div>

  );
}

export default App
