interface BlogCardProps {
  img?: string;
  title: string;
  text: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ img, title, text }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
