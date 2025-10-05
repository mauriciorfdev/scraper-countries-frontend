import './countriesTable.css';
import Table from 'react-bootstrap/Table';

const CountriesTable = () => {
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
          <tr>
            <td>1</td>
            <td>peru</td>
            <td>lima</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CountriesTable;
