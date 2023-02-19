import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

const PrintCard = ({print}) => {
    const {id, image, name} = print;
    return (
        <Link to={`${id}`}>
        <Card >
            <CardImg width='10%' 
            src={image} 
            alt={name}/>
        <CardImgOverlay>
            <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
        </Card>
        </Link>
    );
}
export default PrintCard;