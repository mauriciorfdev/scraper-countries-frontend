import './dataTable.css';
import Table from 'react-bootstrap/Table';
import type { Country } from '../../src/types/index';

const DataTable = ({ data }: { data: Country[] }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((country, index) => {
            return (
              <tr key={country._id}>
                <td>{index + 1}</td>
                <td>{country.name}</td>
                <td>{country.capital}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
