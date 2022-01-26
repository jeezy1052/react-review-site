import React from 'react'
import {Container, Row, Form} from 'react-bootstrap';


const FormPage = () => {
  return (
    <Container>
      <Row>
        <div className="col-lg-6">
          <h1>Leave review today</h1>
          <h4>To store your favorite strains</h4>
          <h5>In Our Database</h5>
        </div>
        <div className="col-lg-6">
          <Form>
            <input className="form-control" placeholder='User Name'/>
            <input className="form-control" placeholder='Strain Name'/>
            <select className="form-control ">
              <option>Default select</option>
              <option>Dip</option>
              <option>Default select</option>
              <option>Default select</option>
            </select>
            <select className="form-control">
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
              <option>Default select</option>
            </select>
            <div class="form-group">
            <label for="exampleFormControlFile1">Example file input</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
            </div>
            <textarea className="form-control" placeholder="Leave review"/>
            <button className="btn btn-dark btn-lg" type="submit">Submit</button>
            
          </Form>
          
        </div>
      </Row>
    </Container>
  )
}

export default FormPage
