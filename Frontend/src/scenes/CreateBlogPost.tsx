import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import blogPosts from "../Test/blogPosts.json";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  body: string;
}

const BlogPostEntryForm = () => {
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [submittedData, setSubmittedData] = useState({
    coverImage:
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    title: "",
    bodyText: "",
  });

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, you can send the data to the server or process it further
    setSubmittedData({ coverImage, title, bodyText });
    const newBlogPost: BlogPost = {
      id: blogPosts.length > 0 ? blogPosts[blogPosts.length - 1].id + 1 : 1,
      title: title,
      image: coverImage,
      body: bodyText,
    };
    const updatedBlogPosts = [...blogPosts, newBlogPost];
    console.log({ updatedBlogPosts });
    console.log({ coverImage, title, bodyText });
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <h2>New Blog Post</h2>
            <div className="form-group">
              <label htmlFor="coverImage">Cover Image</label>
              <input
                className="form-control"
                type="file"
                id="coverImage"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                className="form-control"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bodyText">Body Text</label>
              <textarea
                className="form-control"
                id="bodyText"
                value={bodyText}
                onChange={(e) => setBodyText(e.target.value)}
                rows={10}
              />
            </div>
            <button className="btn btn-primary my-2" type="submit">
              Submit
            </button>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center">
            <BlogCard
              img={submittedData.coverImage}
              text={submittedData.bodyText}
              title={submittedData.title}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default BlogPostEntryForm;
