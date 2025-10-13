import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from '../components/data-table/DataTable';
import CustomButton from '../components/custom-button/CustomButton';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';
import { useEffect, useState } from 'react';
import type { Country, ThemeMode } from './types/index';
import { LuMoon } from 'react-icons/lu';
import { LuSun } from 'react-icons/lu';
import Button from 'react-bootstrap/Button';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingScrape, setLoadingScrape] = useState<boolean>(false);
  const [loadingClear, setLoadingClear] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  const [theme, setTheme] = useState<ThemeMode>('light');

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  async function fetchData() {
    const url = `${API_URL}/api/countries`;
    try {
      console.log('fetching data...');
      setLoadingData(true);
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingData(false);
    }
  }

  async function handleScrape() {
    const url = `${API_URL}/scrape`;
    try {
      console.log('scraping...');
      setLoadingScrape(true);
      await fetch(url, { method: 'POST' });
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingScrape(false);
    }
  }
  async function handleClear() {
    const url = `${API_URL}/clear`;
    try {
      setLoadingClear(true);
      await fetch(url, { method: 'DELETE' });
      setCountries([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingClear(false);
    }
  }

  function handleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <>
      <div className='fixed-div'>
        <Button onClick={handleTheme}>
          {theme === 'light' ? <LuSun /> : <LuMoon />}
        </Button>
      </div>

      <h1>MERN + Puppeteer</h1>

      <div className='button-container section'>
        <CustomButton
          name={loadingScrape ? 'Scraping...' : 'Scrape with Puppeteer'}
          Icon={SiPuppeteer}
          onHandleClick={handleScrape}
          isLoading={loadingScrape}
        />
        <CustomButton
          name={loadingClear ? 'Deleting...' : 'Delete DB'}
          Icon={BsDatabaseFillX}
          onHandleClick={handleClear}
          isLoading={loadingClear}
        />
      </div>

      <div className='table-container section'>
        {loadingData ? (
          <div>
            <h1 key={'loading'} className='fade-in-elem'>
              Loading Data...
            </h1>
          </div>
        ) : countries.length === 0 ? (
          <div>
            <h1 key={'no-data'} className='fade-in-elem'>
              No Data
            </h1>
          </div>
        ) : (
          <DataTable data={countries}></DataTable>
        )}
      </div>
    </>
  );
}

export default App;
