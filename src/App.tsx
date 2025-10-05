import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountriesTable from '../components/countries-table/CountriesTable';
import { BsDatabaseFillX } from 'react-icons/bs';
import { SiPuppeteer } from 'react-icons/si';
import CustomButton from '../components/custom-button/CustomButton';

function App() {
  return (
    <>
      <h1>MERN + Puppeteer</h1>
      <div className='button-container section'>
        <CustomButton name='Scrap with Puppeteer' Icon={SiPuppeteer} />
        <CustomButton name='Delete BD' Icon={BsDatabaseFillX} />
      </div>
      <div className='table-container section'>
        <CountriesTable></CountriesTable>
      </div>
    </>
  );
}

export default App;
