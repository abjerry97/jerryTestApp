import React from 'react';
import {Badge, Button, Col, Form, Nav, Row, Table} from 'react-bootstrap';
import * as FtIcons from 'react-icons/fi';
import "./Gigs.css";
function Gigs() {
    return (
        <div className="container-fluid">
            <div className= "row gigs-row">
              <div className= "col-12">
                <ul>
                    <li>
                      <h1>  Gigs</h1>
                    </li>

                    <li>
                        <Button href="#" style={{background: "#2F417E", border: "1px solid #F6F6F6",borderRadius: "10px" }}>New gig <Badge bg="none"><i className="fa fa-plus"> </i></Badge></Button>
                    </li>
                </ul>
                </div>
            </div>
            
            <div className= "row gigs-nav-row"><Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">All gigs <Badge pill bg="danger">
    3404
  </Badge>{' '}</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">My gigs <Badge pill bg="danger">
    3404
  </Badge></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Rejected gigs <Badge pill bg="danger">
    3404
  </Badge></Nav.Link>
  </Nav.Item>

</Nav></div>

<div className= "row form-nav-row">
<Form>
  <Row className= "nav-row-inner">
    <Col>
      <Form.Control placeholder="Freelance" />
    </Col>
    <Col>
    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="0">Keywords</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Col>
    <Col>
    <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
        <option value="0">Location</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
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
<div className= "container">
<div className= "table-responsive table-nav-row">
<Table hover >
  <thead>
    <tr>
      <th></th>
      <th>Role</th>
      <th>Company</th>
      <th>Date <svg xmlns="http://www.w3.org/2000/svg" width="24.794" height="12.947" viewBox="0 0 24.794 12.947"><defs></defs><g transform="translate(-1100.59 -509.951)"><path class="a" d="M8.113.355a1.208,1.208,0,0,0-1.71,0L2.435,4.322,2.419,1.2A1.21,1.21,0,0,0,1.21,0H1.2A1.21,1.21,0,0,0,0,1.216L.03,7.26a1.209,1.209,0,0,0,1.208,1.2l6.018,0h0a1.21,1.21,0,1,0,0-2.419H4.131L8.113,2.065a1.208,1.208,0,0,0,0-1.71" transform="translate(1113.409 516.91) rotate(-45)"/><path class="a" d="M8.463,1.239A1.209,1.209,0,0,0,7.26.03L1.216,0H1.21a1.21,1.21,0,0,0,0,2.419l3.117.016L.354,6.4a1.209,1.209,0,1,0,1.71,1.71L6.045,4.132l0,3.127a1.211,1.211,0,0,0,1.21,1.208h0A1.209,1.209,0,0,0,8.467,7.256Z" transform="translate(1100.59 515.938) rotate(-45)"/></g></svg></th>
      <th>Salary($)<svg xmlns="http://www.w3.org/2000/svg" width="24.794" height="12.947" viewBox="0 0 24.794 12.947"><defs></defs><g transform="translate(-1100.59 -509.951)"><path class="a" d="M8.113.355a1.208,1.208,0,0,0-1.71,0L2.435,4.322,2.419,1.2A1.21,1.21,0,0,0,1.21,0H1.2A1.21,1.21,0,0,0,0,1.216L.03,7.26a1.209,1.209,0,0,0,1.208,1.2l6.018,0h0a1.21,1.21,0,1,0,0-2.419H4.131L8.113,2.065a1.208,1.208,0,0,0,0-1.71" transform="translate(1113.409 516.91) rotate(-45)"/><path class="a" d="M8.463,1.239A1.209,1.209,0,0,0,7.26.03L1.216,0H1.21a1.21,1.21,0,0,0,0,2.419l3.117.016L.354,6.4a1.209,1.209,0,1,0,1.71,1.71L6.045,4.132l0,3.127a1.211,1.211,0,0,0,1.21,1.208h0A1.209,1.209,0,0,0,8.467,7.256Z" transform="translate(1100.59 515.938) rotate(-45)"/></g></svg></th>
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
        </div>
    );
}

export default Gigs;
