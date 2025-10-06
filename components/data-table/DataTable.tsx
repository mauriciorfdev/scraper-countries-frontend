import './dataTable.css';
import Table from 'react-bootstrap/Table';

interface Country {
  name: string;
  capital: string;
}

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

export default DataTable;
