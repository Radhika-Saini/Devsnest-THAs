import React, {useState} from 'react'
import { Carousel, Button, Fade, Row, Col, Card, Container } from 'react-bootstrap'

const ss = {
    color: "black",
    fontWeight: "bold",
    fontSize: '1.2rem'
}

function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          About Us
        </Button>
        <Fade in={open}>
          <div id="example-fade-text" style={ss}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Fade>
      </>
    );
  }
  
 

const About = () => {
    return (
        <div>
            <Carousel>
                
                <Carousel.Item>
                    <img
                    style={{height: '60vh', opacity: '.75'}}
                    className="d-block w-100"
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <Example />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height: '60vh', opacity: '.75'}}
                    className="d-block w-100"
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <Example />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{height: '60vh', opacity: '.75'}}
                    className="d-block w-100"
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Example />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container style={{margin: '20px auto'}}>
            <Row>
                <Col sm>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Blogs</Card.Header>
                    <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Blogs</Card.Header>
                    <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Blogs</Card.Header>
                    <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>Blogs</Card.Header>
                    <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                        <Card.Text>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default About
