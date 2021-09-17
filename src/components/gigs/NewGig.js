import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function NewGig() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <ul>
            <li>Gigs</li>

            <li>
              <Button href="#">
                New gig <i className="fa fa-plus"> </i>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
    
          <div className="col-sm-12 col-lg-3">
            <>
            <Form.Check type="radio" aria-label="radio 1" />
              <Form.Check type="radio" aria-label="radio 1" />
            </>
          </div>
          <div className="col-sm-12 col-lg-9">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </Row>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          
        </div>
      </div>
    </div>
  );
}

export default NewGig;
