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

const EducationExperience = () => {
  const { experience, education, awards } = portfolioData;

  return (
    <Container className="py-5">
      <h2 className="mb-4">Experience</h2>
      <Row className="mb-5">
        {experience.map((exp: any, index: number) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start">
                  <Card.Title>{exp.role}</Card.Title>
                  {exp.type && <Badge bg="primary">{exp.type}</Badge>}
                </div>
                <Card.Subtitle className="mb-3 text-muted">{exp.company} | {exp.duration}</Card.Subtitle>
                <Card.Text as="div">{renderMultiline(exp.description)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mb-4">Education</h2>
      
      <h4 className="mb-3">Formal Education</h4>
      <Row className="mb-4">
        {education.formal.map((edu: any, index: number) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.institution} | {edu.duration}</Card.Subtitle>
                {edu.grade && <Card.Text><strong>Grade:</strong> {edu.grade}</Card.Text>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h4 className="mb-3">Informal Education</h4>
      <Row className="mb-4">
        {education.informal.map((edu, index) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>{edu.course}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{edu.provider} | {edu.year}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h4 className="mb-3">Certifications</h4>
      <Row className="mb-5">
        {education.certifications.map((cert: any, index: number) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{cert.issuer} | {cert.year}</Card.Subtitle>
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm mt-2">
                    View Certificate
                  </a>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="mb-4">Awards</h2>
      <Row>
        {awards.map((award, index) => (
          <Col md={12} key={index} className="mb-3">
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Card.Title>{award.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-primary">{award.position}</Card.Subtitle>
                <Card.Text as="div">{renderMultiline(award.description)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EducationExperience;
