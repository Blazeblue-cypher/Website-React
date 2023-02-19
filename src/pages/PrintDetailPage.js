import { Container, Row } from "reactstrap";
import {useParams} from 'react-router-dom';
import { selectPrintById } from "../features/prints/printsSlice";
import PrintDetail from "../features/prints/PrintDetail";



const PrintDetailPage = () => {
    const {printId} = useParams();
    const print = selectPrintById(printId);

    return (
        <Container>
            <Row>
                <PrintDetail print={print} />
            </Row>
            
        </Container>
    );
};

export default PrintDetailPage;