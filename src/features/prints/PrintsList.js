import { Col, Row, } from 'reactstrap';
import PrintCard from "./PrintCard";
import { selectAllPrints } from './printsSlice';

const PrintsList = ({setPrintId}) => {
    const prints = selectAllPrints();

    return (     
        <Row className="ms-auto">
            {prints.map((print) => {
                return (
                    <Col md="5" className="m-4" key={print.id}
                    onClick={() => setPrintId(print.id) } >
                        <PrintCard print={print} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default PrintsList;