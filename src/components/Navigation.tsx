import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Navbar className="bg-body-tertiary mb-4 shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Nicholas Tanugroho
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              About Me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/education-experience">
              Education, Awards & Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Button
            variant={theme === "light" ? "outline-dark" : "outline-light"}
            onClick={toggleTheme}
            className="ms-2"
          >
            {theme === "light" ? "Dark" : "Light"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
