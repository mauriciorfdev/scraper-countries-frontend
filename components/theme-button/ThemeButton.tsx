import './themebutton.css';
import { useState, useEffect } from 'react';
import { LuMoon } from 'react-icons/lu';
import { LuSun } from 'react-icons/lu';
import Button from 'react-bootstrap/Button';
import type { ThemeMode } from '../../src/types';

const ThemeButton = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  function handleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className='fixed-div'>
      <Button onClick={handleTheme}>
        {theme === 'light' ? <LuSun /> : <LuMoon />}
      </Button>
    </div>
  );
};

export default ThemeButton;
