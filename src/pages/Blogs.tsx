import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const Blogs = () => {
  const { blogs } = portfolioData;

  return (
    <Container className="py-5">
      <h2 className="mb-4">Blogs</h2>
      <Row>
        {blogs.map((blog, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm border-0 h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{blog.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{blog.date}</Card.Subtitle>
                <Card.Text>{blog.summary}</Card.Text>
                <div className="mt-auto pt-3">
                  <Link to={`/blogs/${blog.id}`} className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blogs;
