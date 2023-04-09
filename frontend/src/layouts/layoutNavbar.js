import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GuideModal } from "../components/guideModal";

export const LayoutNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [displayGuideModal, setDisplayGuideModal] = useState(false);

  return (
    <Navbar expanded={expanded} bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand>Unfollowers</Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse>
          <Nav onClick={() => setExpanded(false)} className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/unfollowers">
              <Nav.Link>Unfollowers</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={() => setDisplayGuideModal(true)}>
              Guide
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <GuideModal
        showState={displayGuideModal}
        onClose={() => setDisplayGuideModal(false)}
      />
    </Navbar>
  );
};
