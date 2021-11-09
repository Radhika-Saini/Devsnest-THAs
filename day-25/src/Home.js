import React from 'react';
import {Card, Button, Container, Row, Col} from 'react-bootstrap';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Container>
            <Row>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm>
                    <Card style={{ width: '25rem', marginBottom: "30px" }}>
                        <Card.Img variant="top" src="https://media.nomadicmatt.com/2018/apartment.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="outline-primary">Primary</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
            <div style={{borderTop: "1px solid lightgray", padding: "20px", backgroundColor: '#f7f7f7', textAlign: 'center'}}>
            <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
            </div>
        </div>
    )
}

export default Home;


