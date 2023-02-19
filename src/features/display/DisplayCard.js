import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DisplayCard = ({ item }) => {
    const { image, name, description } = item;
    return (
        
        <Card>
            <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardImg src={image} alt={name} />
            
                
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    );
};

export default DisplayCard;

