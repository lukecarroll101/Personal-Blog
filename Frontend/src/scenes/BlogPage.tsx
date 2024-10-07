import NavbarMinTrans from "../components/Navbar_trans";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  title: string;
  image: string;
  body: string;
  created: string;
}

const BlogPost = ({}) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const { blogPostID } = useParams<{ blogPostID: string }>();

  useEffect(() => {
    getBlogPosts();
  }, []);

  let getBlogPosts = async () => {
    let response = await fetch(`http://127.0.0.1:8000/blogposts/${blogPostID}`);
    let data = await response.json();
    const updateBlogPost: BlogPost = { ...data };
    updateBlogPost.image = `http://127.0.0.1:8000${updateBlogPost.image}`;
    console.log(updateBlogPost);
    setBlogPosts([updateBlogPost]);
  };

  return (
    <>
      {blogPosts.length > 0 && (
        <img
          src={blogPosts[0].image}
          style={{ width: "100%", maxHeight: "50vh", objectFit: "cover" }}
        />
      )}
      <NavbarMinTrans colour="white" />
      <div
        className="pt-5"
        style={{
          width: "59%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {blogPosts.length > 0 && <h1 className="pb-3">{blogPosts[0].title}</h1>}
        {blogPosts.length > 0 && (
          <ReactMarkdown>{blogPosts[0].body}</ReactMarkdown>
        )}
      </div>
    </>
  );
};

export default BlogPost;
