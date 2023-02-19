import React from 'react';
import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';

import SubHeader from '../components/SubHeader';

const AboutPage = () => {
return (
    <Container>
        <SubHeader current='About'/>
        <Row className='row-content'>
            <Col sm='6'>
                <h3>About Us</h3>
                <p>
                BlueBlaze3DPrints is a marketplace for 3D models.  We are dedicated to providing the best service.  We offer the oppurtunity to find your own files and then we print them.  Additionaly, you can chose from pre-made items.
                    BlueBlaze3DPrints is owned and operated by Haldon Bernard, also known as Blueblaze.  He has 2 years of printing experience.  He established BlueBlaze3DPrints in 2022.
                </p>
            </Col>
            <Col>
            <Card>
                <CardHeader>
                    <h3>Facts</h3>
                </CardHeader>
                <CardBody>
                <dl className='row'>
                                    <dt className='col-6'>Founded</dt>
                                    <dd className='col-6'>May 3, 2022</dd>
                                    <dt className='col-6'>Employees</dt>
                                    <dd className='col-6'>1</dd>
                                </dl>
                </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>
)




};

export default AboutPage;