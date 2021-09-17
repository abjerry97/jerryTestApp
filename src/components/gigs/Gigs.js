import React from 'react';
import {Button, Col, Form, Nav, Row, Table} from 'react-bootstrap';
import "./Gigs.css";
function Gigs() {
    return (
        <div className="container-fluid">
            <div className= "row gigs-row">
                <ul>
                    <li>
                      <h1>  Gigs</h1>
                    </li>

                    <li>
                        <Button href="#">New gig <i className="fa fa-plus"> </i></Button>
                    </li>
                </ul>
            </div>
            
            <div className= "row gigs-nav-row"><Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">All gigs</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">My gigs</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Rejected gigs</Nav.Link>
  </Nav.Item>

</Nav></div>

<div className= "row form-nav-row">
<Form>
  <Row className= "nav-row-inner">
    <Col>
      <Form.Control placeholder="Freelance" />
    </Col>
    <Col>
      <Form.Control placeholder="Keyword" />
    </Col>
    <Col>
      <Form.Control placeholder="Location" />
    </Col>
    <Col>
      <Form.Control placeholder="Remote friendly" />
    </Col>
    <Col>
      <Form.Control placeholder="Design" />
    </Col>
    <Col>
      <Form.Control placeholder="Contract" />
    </Col>
  </Row>
</Form>
</div>
<div className= "row table-nav-row">
<Table hover >
  <thead>
    <tr>
      <th>#</th>
      <th>Role</th>
      <th>Company</th>
      <th>Date</th>
      <th>Salary($)</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  <Form.Check aria-label="option 1" /></td>
      <td>Product Designer</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td><Button variant="outline-danger">Danger</Button>{' '}</td>
    </tr>
    <tr>
      <td> <Form.Check aria-label="option 1" /></td>
      <td>Product Designer</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td><Button variant="outline-danger">Danger</Button>{' '}</td>
    </tr>
    <tr>
      <td> <Form.Check aria-label="option 1" /></td>
      <td colSpan="2">Product Designer</td>
      <td>@twitter</td>
      <td>Otto</td>
      <td><Button variant="outline-danger">Danger</Button>{' '}</td>
    </tr>
  </tbody>
</Table>
</div>
        </div>
    );
}

export default Gigs;
