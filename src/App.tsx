import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from '../components/data-table/DataTable';
import CustomButton from '../components/custom-button/CustomButton';
import ThemeButton from '../components/theme-button/ThemeButton';

import type { Country } from './types/index';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';

import {
  loadCountries,
  scrapeCountries,
  clearCountries,
} from './services/api.js';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingScrape, setLoadingScrape] = useState<boolean>(false);
  const [loadingClear, setLoadingClear] = useState<boolean>(false);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      console.log('fetching data...');
      setLoadingData(true);
      const data = await loadCountries();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingData(false);
    }
  }

  async function handleScrape() {
    try {
      console.log('scraping...');
      setLoadingScrape(true);
      await scrapeCountries(); //scraping countries
      fetchData(); //refresh countries
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingScrape(false);
    }
  }
  async function handleClear() {
    try {
      setLoadingClear(true);
      await clearCountries();
      setCountries([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingClear(false);
    }
  }

  return (
    <>
      <ThemeButton />

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
            <h2 key={'loading'} className='fade-in-elem'>
              Loading Data...
            </h2>
          </div>
        ) : countries.length === 0 ? (
          <div>
            <h2 key={'no-data'} className='fade-in-elem'>
              No Data
            </h2>
          </div>
        ) : (
          <DataTable data={countries}></DataTable>
        )}
      </div>
    </>
  );
}

export default App;
