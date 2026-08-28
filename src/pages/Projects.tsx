import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import portfolioData from '../data/portfolio.json';

const renderMultiline = (text: string | string[] | undefined) => {
  if (!text) return null;
  if (Array.isArray(text)) {
    return text.map((paragraph, index) => (
      <p key={index} className="mb-2">{paragraph}</p>
    ));
  }
  return <div style={{ whiteSpace: 'pre-line' }}>{text}</div>;
};

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <Container className="py-5">
      <h2 className="mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col lg={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              {project.image && <Card.Img variant="top" src={project.image} alt={project.title} style={{ aspectRatio: '4/3', objectFit: 'cover' }} />}
              <Card.Body>
                <Card.Title className="fw-bold">{project.title}</Card.Title>
                <div className="mb-3">
                  {project.techStack.map((tech, idx) => (
                    <Badge bg="secondary" className="me-2" key={idx}>{tech}</Badge>
                  ))}
                </div>
                <Card.Text><strong>Role:</strong> {project.role}</Card.Text>
                <Card.Text as="div">{renderMultiline(project.description)}</Card.Text>
                <Card.Text as="div">
                  <strong>What I learned:</strong><br />
                  {renderMultiline(project.learnings)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
