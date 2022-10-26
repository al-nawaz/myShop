import Table from 'react-bootstrap/Table'

function Mytable () {
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Device</th>
          <th>MRP</th>
          <th>Offer Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Iphone 9</td>
          <td>25000/-</td>
          <td>11000/-</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Samsung S13</td>
          <td>99500/-</td>
          <td>35500/-</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Google Pixel 8</td>
          <td>55000/-</td>
          <td>20000/-</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Mytable;