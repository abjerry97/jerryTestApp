import React from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddGigNavBar from "../NavBar/AddGigNavBar";
import "./NewGig.css";

function NewGig() {
  return (
    <div className="container-fluid new-gig">             
      <div className="container">
        <AddGigNavBar />
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Card>
              <Card.Body>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      {" "}
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        label="Basic Data"
                      />
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Form.Check
                        type="radio"
                        aria-label="radio 1"
                        label="Renumeration"
                      />
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={5}>
            <Card>
              <Card.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control placeholder="First name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control placeholder="Last name" />
                        </Form.Group>
                      </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>Company</Form.Label>
                          <Form.Control placeholder="Company name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label>City</Form.Label>
                          <Form.Control placeholder="City name" />
                        </Form.Group>
                        <Row className="mb-3">
                          <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                        </Row>
                      </Row>

                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                      </Form.Group>
                      <Link
                        to="./gigs"
                        style={{ color: "black", margin: "1rem " }}
                      >
                        {" "}
                        Back{" "}
                      </Link>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Form>
                      <Row className="mb-3">
                        <Form.Label>Salary</Form.Label>
                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Control placeholder="Minimum" />
                          <Form.Control placeholder="Maximum" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                          <Form.Label></Form.Label>
                        </Form.Group>
                      </Row>
                      <Link
                        to="./gigs"
                        style={{ color: "black", margin: "1rem " }}
                      >
                        {" "}
                        Back{" "}
                      </Link>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default NewGig;
