
import React from 'react'
import { Container, Row,Col,Card,Button,Carousel } from "react-bootstrap";



export default function Movie () {
  return (
    
  
<Container>
<Carousel style={{ width: '100%', padding: 30 }}> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="./Movies/1.avif" alt="Image One"/> 
          </Carousel.Item> 
        <Carousel.Item interval={1500}> 
          <img className="d-block w-100" src="./Movies/2.avif" alt="Image Two"/> 
          </Carousel.Item>
          <Carousel.Item interval={1500}> 
          <img className="d-block w-100"src="./Movies/3.avif"alt="Image Two"/> 
          </Carousel.Item>
          <Carousel.Item interval={1500}> 
          <img className="d-block w-100"src="./Movies/4.avif"alt="Image Two"/> 
          </Carousel.Item> 
      </Carousel> 


  
  <Row my-3>
  <img src="./Movies/cup.avif" alt="cup" />
  </Row> 
  <Row>
      <h1 my-4 style={{textAlign:'left', fontSize:'25px',fontWeight:'bold'}}>Recommended Movies</h1>
      <Col md={2}>
        <Card style={{ width: '100%' ,textAlign:'left',fontSize:'12px',fontFamily:'sans-serif' }}>
      <Card.Img variant="top" src="Movies/Leo.avif"/>
      <Card.Body>
        <Card.Title >Leo</Card.Title>
        <Card.Text>
          Action/Thriller
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>

        </Col>

        <Col md={2}>
        <Card style={{width:'100%',textAlign:'left',fontSize:'12px',fontFamily:'sans-serif'}}>
      <Card.Img  variant='top'  src="./Movies/Irugapatru.avif"/>
      <Card.Body>
        <Card.Title>Irugapatru</Card.Title>
        <Card.Text>
          Drama/Romantic
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
        <Card style={{ width: '100%',textAlign:'left',fontSize:'12px',fontFamily:'sans-serif'}}>
      <Card.Img variant="top" src="Movies/Killers.avif"/>
      <Card.Body>
        <Card.Title>Killers</Card.Title>
        <Card.Text>
          Crime/Historical
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
    </Col>

      <Col md={2}>
        <Card style={{ width: '100%',textAlign:'left',fontSize:'12px',fontFamily:'sans-serif'}}>
      <Card.Img variant="top" src="Movies/tejas.avif"/>
      <Card.Body>
        <Card.Title>Tejas</Card.Title>
        <Card.Text>
          Drama/Thriller
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
    </Col>
        
    <Col md={2}>
        <Card style={{ width: '100%',textAlign:'left',fontSize:'12px',fontFamily:'sans-serif'}}>
      <Card.Img variant="top" src="Movies/12th.avif"/>
      <Card.Body>
        <Card.Title>12th Fail</Card.Title>
        <Card.Text>
          Drama
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
        <Card style={{ width: '100%',textAlign:'left',fontSize:'10px',fontFamily:'sans-serif'}}>
      <Card.Img variant="top" src="Movies/pathan.avif"/>
      <Card.Body>
        <Card.Title>Pathan</Card.Title>
        <Card.Text>
          Action/Thriller
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row> 
      
     <Row my-3 >
        <img src="./Movies/stream.avif" alt="stream" />
      </Row>

</Container>
)
}


