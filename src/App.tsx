import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

  type Option = 'scraper-btn' | 'delete-btn';
  const [option, setOption] = useState<Option>('scraper-btn');

  const [modalShow, setModalShow] = useState<boolean>(false);
  const handleCloseModal = () => setModalShow(false);
  const handleShowModal = () => setModalShow(true);

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
      handleCloseModal();
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
      handleCloseModal();
    }
  }

  return (
    <>
      <ThemeButton />

      <h1>MERN + Puppeteer</h1>

      <div className='button-container section'>
        <Button
          size='lg'
          onClick={() => {
            handleShowModal();
            setOption('scraper-btn');
          }}
        >
          <SiPuppeteer />
          <span style={{ margin: '0.5rem' }}>Scrape with Puppeteer</span>
        </Button>
        <Button
          size='lg'
          onClick={() => {
            handleShowModal();
            setOption('delete-btn');
          }}
        >
          <BsDatabaseFillX />
          <span style={{ margin: '0.5rem' }}>Delete DB</span>
        </Button>
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

      {/* <CustomModal /> */}

      <Modal show={modalShow} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you really want to {option == 'scraper-btn' ? 'scrape' : 'delete'}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Close
          </Button>

          {option == 'scraper-btn' ? (
            <CustomButton
              name={loadingScrape ? 'Scraping...' : 'Scrape with Puppeteer'}
              Icon={SiPuppeteer}
              onHandleClick={handleScrape}
              isLoading={loadingScrape}
            />
          ) : (
            <CustomButton
              name={loadingClear ? 'Deleting...' : 'Delete DB'}
              Icon={BsDatabaseFillX}
              onHandleClick={handleClear}
              isLoading={loadingClear}
            />
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
