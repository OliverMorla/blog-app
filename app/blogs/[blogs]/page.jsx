import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import "./page.scss";

const getBlog = async (id) => {
  const res = await fetch(process.env.API_URL + "/blogs", {
    method: "GET",
    cache: "force-cache",
  });
  const blogs = await res.json();
  const selectedBlog = await blogs.find((blog) => blog.id === parseInt(id));
  
  return selectedBlog;
};

const handleDelete = async () => {};

const handleEdit = async () => {};

const Blog = async ({ params: { blogs: id } }) => {
  const blog = await getBlog(id);
  
  return (
    <div className="container">
      <div className="blog-header-w">
        <img src="/user-icon.png" alt="" className="user-photo" />
        <h3 className="author">User</h3>
        <div className="blog-info-w">
          <div className="date">{blog?.date}</div>
          <div className="category">{blog?.category}</div>
          <div className="manage-btn-w">
            <FontAwesomeIcon icon={faTrash} className="delete-btn" />
            <FontAwesomeIcon icon={faUserPen} className="edit-btn" />
          </div>
        </div>
      </div>
      <img src={blog?.photourl} alt="" />
      <div className="blog-content-w">
        <h1 className="blog-title">{blog?.title}</h1>
        <p>{blog?.description}</p>
      </div>
    </div>
  );
};

export default Blog;
