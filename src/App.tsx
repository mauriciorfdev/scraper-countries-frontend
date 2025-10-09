import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from '../components/data-table/DataTable';
import CustomButton from '../components/custom-button/CustomButton';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';
import { useState } from 'react';
import type { Country } from './types/index';

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  async function handleFetch() {
    console.log('FETCH DATA!');
    const url = 'http://localhost:5000/api/countries';
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function handleClear() {
    console.log('CLEAR DATA!');
    console.log(import.meta.env.PROD);
  }

  return (
    <>
      <h1>MERN + Puppeteer</h1>
      <div className='button-container section'>
        <CustomButton
          name='Scrap with Puppeteer'
          Icon={SiPuppeteer}
          onHandleClick={handleFetch}
        />
        <CustomButton
          name='Delete BD'
          Icon={BsDatabaseFillX}
          onHandleClick={handleClear}
        />
      </div>
      <div className='table-container section'>
        {countries.length === 0 ? (
          <p>No Data</p>
        ) : (
          <DataTable data={countries}></DataTable>
        )}
      </div>
    </>
  );
}

export default App;
