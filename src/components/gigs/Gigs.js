import React, { useEffect } from 'react';
import {Badge, Button, Col, Form, Nav, Row, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listGigs, removeGig } from '../../actions/gigActions';
import GigNavBar from '../NavBar/GigNavBar';
import "./Gigs.css";
function Gigs() {
  const dispatch = useDispatch();
   const gigList = useSelector((state) => state.gigList);
  const { gigs} = gigList;
  console.log(gigs);
    useEffect(() =>{
      dispatch( listGigs() )
    }, [dispatch])
    const removeGigHandler = (id) => {
      dispatch(removeGig(id));
    };
    return (
        <div className="container-fluid">
            <div className= "row gigs-row">
              <div className= "col-12">
                <GigNavBar/>  
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
      <th>Email</th>
      <th>City</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {gigs.map((user)  =>
    (<tr key={user.id}>
      <td>  <Form.Check aria-label="option 1" /></td>
      <td>{user.name}</td>
      <td>{user.company.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td><Button variant="outline-danger"  onClick={() => removeGigHandler(user.id)}>Delete</Button>{' '}</td>
    </tr>))}
  </tbody>
</Table>
</div>
</div>
        </div>
    );
}

export default Gigs;
