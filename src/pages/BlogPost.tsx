import { useEffect, useState } from 'react';
import { Container, Button, Spinner, Alert } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const blogMeta = portfolioData.blogs.find(b => b.id === id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Fetch the HTML file from the public/blogs folder
      fetch(`/blogs/${id}.html`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Blog post not found.');
          }
          return response.text();
        })
        .then(html => {
          setContent(html);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (!blogMeta) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Blog post metadata not found in JSON.</Alert>
        <Button as={Link} to="/blogs" variant="secondary">Back to Blogs</Button>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <Button as={Link} to="/blogs" variant="outline-secondary" className="mb-4">
        &larr; Back to Blogs
      </Button>
      
      <h1 className="fw-bold mb-2">{blogMeta.title}</h1>
      <p className="text-muted mb-5">{blogMeta.date}</p>

      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <div 
          className="blog-content" 
          dangerouslySetInnerHTML={{ __html: content }} 
        />
      )}
    </Container>
  );
};

export default BlogPost;
