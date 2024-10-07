import { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";
import NavbarMin from "../components/Navbar";
import exampleImage1 from "../assets/pp.jpg";

interface BlogPost {
  title: string;
  image: string;
  body: string;
  created: string;
}

const Test = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const maxLength = 100;

  useEffect(() => {
    getBlogPosts();
  }, []);

  let getBlogPosts = async () => {
    let response = await fetch("http://127.0.0.1:8000/blogposts");
    let data = await response.json();
    console.log("Data:", data);
    const blogPostsWithCorrectImageUrls = data.map((post: BlogPost) => ({
      ...post,
      image: `http://127.0.0.1:8000${post.image}`,
    }));
    setBlogPosts(blogPostsWithCorrectImageUrls);
    console.log(blogPostsWithCorrectImageUrls);
  };

  function redirectToURL(url: string) {
    window.location.href = url;
  }

  return (
    <>
      <NavbarMin />
      <div className="App">
        <div className="blog-container pt-5">
          {blogPosts.map((post: BlogPost, index: number) => (
            <motion.div
              key={index}
              className="blog-card"
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onClick={() =>
                redirectToURL(`http://localhost:5173/blog-post/${index + 1}`)
              }
            >
              <div className="image-container">
                <img src={post.image} alt={post.title} />
                <div className="gradient-overlay"></div>
                <div className="text-content">
                  <h2>{post.title}</h2>
                  <div
                    className="image-container-pp"
                    style={{ height: "30px" }}
                  >
                    <p style={{ paddingTop: "8px" }}>Luke Carroll</p>
                    <img src={exampleImage1} />
                  </div>
                  <p>
                    {post.body.length > maxLength
                      ? post.body.slice(0, maxLength) + "..."
                      : post.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Test;
