import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from '../components/data-table/DataTable';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';
import CustomButton from '../components/custom-button/CustomButton';
import { useState } from 'react';

async function handleFetch() {
  console.log('FETCH DATA!');
}
async function handleClear() {
  console.log('CLEAR DATA!');
}

function App() {
  const [countries, setCountries] = useState([]);
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
        <DataTable data={countries}></DataTable>
      </div>
    </>
  );
}

export default App;
