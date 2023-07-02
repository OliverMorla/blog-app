import Link from "next/link";
import "./page.scss";

export const metadata = {
  title: "Blog App - News",
  description: "Blog Application",
};

async function getNews() {
  const res = await fetch(process.env.API_URL + "/news", {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
}

const News = async () => {
  const news = await getNews();

  return (
    <div className="news-w">
      <h1 className="heading"> Latest News </h1>
      <div className="news-item-w">
        {news.map((item, index) => (
          <div className="news-card" key={item.id}>
            <img src={item.photourl} alt="post-image" className="card-photo" />
            <div className="info-w">
              <div className="section">
                <div className="date"> {item.date} | </div>
                <div className="category"> {item.category} </div>
              </div>
              <h2 className="title"> {item.title} </h2>
              <Link href={`/news/${item.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
