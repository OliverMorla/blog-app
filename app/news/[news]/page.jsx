import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Link from "next/link";
import "./page.scss";

export async function generateMetadata({ params: { news: id } }) {
  const data = await getArticle();
  const article = data.find((item) => item.id === parseInt(id));
  
  return {
    title: article?.title,
    description: article?.description,
  }
}

const getArticle = async () => {
  const res = await fetch(process.env.API_URL + "/news", {
    method: "GET",
    cache: "force-cache",
  });
  return res.json();
}

const newsArticle = async ({ params: { news: id } }) => {
  const data = await getArticle();
  const article = data.find((item) => item.id === parseInt(id));

  return (
    <div className="container">
      <img src={article?.photourl} alt="" className="blog-photo" />
      <div className="blog-header-w">
        <div className="blog-info-w">
          <div className="user-w">
            <img src={"/user-icon.png"} alt="" className="user-photo" />
            <h3 className="author">User</h3>
          </div>
          <div className="blog-info--w">
            <div className="date">{article?.date}</div>
            <div className="category">{article?.category}</div>
          </div>
          <div className="manage-btn-w">
            <Link href={"/blogs/delete"}>
              <FontAwesomeIcon icon={faTrash} className="delete-btn" />
            </Link>
            <Link href={"/blogs/create"}>
              <FontAwesomeIcon icon={faUserPen} className="edit-btn" />
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-content-w">
        <h1 className="blog-title">{article?.title}</h1>
        <p>{article?.description}</p>
      </div>
    </div>
  );
};

export default newsArticle;
