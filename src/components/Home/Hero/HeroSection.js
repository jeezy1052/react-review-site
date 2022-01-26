import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import bigBrand from '../../../assets/images/BEBLogo.jpg'

const HeroSection = () => {

  return (
    <div className="overlay">
      <Container>
      <Row>
        <Col className="col-lg-8">
          <section className="hero-section">
          
          <h1 className="text-success">Leave A QMR Today</h1>
          <h3 className="text-success">Check our database for best rated strain.</h3>
          </section>
        </Col>
        <Col className="col-lg-4">
          <section className="hero-section">
          <h1>Leave A QMR Today</h1>
          <h3>Check our database for best rated strain.</h3>
          </section>
        </Col>
      </Row>
    </Container>
    </div>
    
    
)
}

export default HeroSection