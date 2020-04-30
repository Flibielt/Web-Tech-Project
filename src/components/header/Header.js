import React from "react";

import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const header = () => (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand as={Link} to="/">Fisherman’s Log</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link as={Link} to="/overview">Overview</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
    </Navbar>
)

export default header;
