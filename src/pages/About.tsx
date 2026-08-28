import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { about } = portfolioData;

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image src={about.picture} alt="Profile" roundedCircle fluid className="shadow" style={{ maxWidth: '250px' }} />
        </Col>
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3">Hi, I'm {about.name}</h1>
          <h3 className="text-muted mb-4">{about.title}</h3>
          {Array.isArray(about.introduction) ? (
            about.introduction.map((paragraph, index) => (
              <p key={index} className="lead">{paragraph}</p>
            ))
          ) : (
            <p className="lead" style={{ whiteSpace: 'pre-line' }}>{about.introduction}</p>
          )}
          
          <div className="mt-4">
            {about.linkedin && (
              <Button href={about.linkedin} target="_blank" rel="noopener noreferrer" variant="primary" className="me-3">
                LinkedIn
              </Button>
            )}
            {about.email && (
              <Button href={`mailto:${about.email}`} variant="outline-primary">
                Email Me
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
