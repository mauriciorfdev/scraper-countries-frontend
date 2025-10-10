import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from '../components/data-table/DataTable';
import CustomButton from '../components/custom-button/CustomButton';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';
import { useEffect, useState } from 'react';
import type { Country } from './types/index';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = `${API_URL}/api/countries`;
    try {
      console.log('fetching data...');
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleScrape() {
    const url = `${API_URL}/scrape`;
    try {
      console.log('scraping...');
      await fetch(url, { method: 'POST' });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }
  async function handleClear() {
    const url = `${API_URL}/clear`;
    try {
      await fetch(url, { method: 'DELETE' });
      setCountries([]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>MERN + Puppeteer</h1>
      <div className='button-container section'>
        <CustomButton
          name='Scrap with Puppeteer'
          Icon={SiPuppeteer}
          onHandleClick={handleScrape}
        />
        <CustomButton
          name='Delete BD'
          Icon={BsDatabaseFillX}
          onHandleClick={handleClear}
        />
      </div>
      <div className='table-container section'>
        {countries.length === 0 ? (
          <h1>No Data</h1>
        ) : (
          <DataTable data={countries}></DataTable>
        )}
      </div>
    </>
  );
}

export default App;
