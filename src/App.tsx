import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import EducationExperience from "./pages/EducationExperience";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/education-experience"
              element={<EducationExperience />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogPost />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
