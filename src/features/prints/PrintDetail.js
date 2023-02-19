import {Card, CardImg, CardText, CardBody, Col} from 'reactstrap';

const PrintDetail = ({print}) => {
    const {image, name, description} = print;

    return (
        <Col md='8' className='m-5'>
        <Card >
            <CardImg src={image} alt={name}/>
            <CardBody>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
        </Col>
    );
};

export default PrintDetail;