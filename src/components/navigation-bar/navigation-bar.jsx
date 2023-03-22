import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navigation-bar.scss'

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <>
      {[false].map((expand) => (
        <div className="navbar-holder">
          <Navbar key={expand} expand={expand} className="mb-4 navbar">
            <Container fluid>

    
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Brand as={Link} to="/" className="brand">
                My Library
              </Navbar.Brand>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav>
                {!user && (
                  <span>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/signup">
                      Signup
                    </Nav.Link>
                  </span>
                )}
                {user && (
                  <>
                    <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                  </>
                )}
              </Nav>

              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className="offCanvas">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}>
                    My Library
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/logout">Logout</Nav.Link>
                    <Nav.Link href="#action1">Titles</Nav.Link>
                    <Nav.Link href="#action2">Authors</Nav.Link>
                    <Nav.Link href="#action2">Series</Nav.Link>
                    <Nav.Link href="#action2">Genre</Nav.Link>
                    <Nav.Link href="#action2">Favorites</Nav.Link>
                    <Nav.Link href="#action2">Reading List</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </div>
      ))}
    </>
  );
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Books App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
