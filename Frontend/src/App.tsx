import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./scenes/Home";
import UserMe from "./scenes/User";
import Settings from "./scenes/Settings";
import Japan from "./scenes/Japan";
import Opposite from "./scenes/Opposite";
import Minimal from "./scenes/Minimal";
import Test from "./Test/Cards";
import BlogPostEntryForm from "./scenes/CreateBlogPost";
import BlogPost from "./scenes/BlogPage";
import Test2 from "./Test2/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserMe />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/opposite" element={<Opposite />} />
        <Route path="/our-love" element={<Minimal />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/entry" element={<BlogPostEntryForm />} />
        <Route path="/blog-post/:blogPostID" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
