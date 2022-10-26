import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.smartprix.com/bytes/wp-content/uploads/2022/08/Apple_iphone_14_Pro_iPhone_14_Pro_Max_concept_renderings_drdNBC.jpg" />
      <Card.Body>
        <Card.Title>iPhone 14 Pro Max</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;