import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedPrint } from '../prints/printsSlice';
import { selectFeaturedLink } from '../links/linksSlice';

const DisplayList = () => {
    const items = [selectFeaturedPrint(), selectFeaturedLink()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className='m-1' key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;

