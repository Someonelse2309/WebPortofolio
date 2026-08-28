import { useEffect, useState } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
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
        <Link to="/blogs" className="btn btn-secondary">Back to Blogs</Link>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: '800px' }}>
      <Link to="/blogs" className="btn btn-outline-secondary mb-4">
        &larr; Back to Blogs
      </Link>
      
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
