import Link from "next/link";
import "./page.scss";

const getCategories = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_CATEGO_URL, {
    method: "GET",
    cache: "force-cache",
  });
  return res.json();
};

const getBlogs = async (value) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BLOG_CATEGO_URL + `/search?query=${value}`,{
      method: "GET",
      cache: "force-cache",
    });
  return res.json();
};

const Blogs = async ({ searchParams: { query } }) => {
  const categories = await getCategories();
  const blogs = await getBlogs(query);

  return (
    <div className="blog-w">
      <div className="heading-w">
        <h1>
          Blog <sub> App </sub>
        </h1>
        <div className="categories-w">
          {categories?.map((item, index) => (
            <>
              <Link href={`/blogs/categories?query=${item?.category}`}>
                <button className="category-item">
                  {item?.category}({item?.count})
                </button>
              </Link>
            </>
          ))}
        </div>
        <Link href={"blogs/create"}>Create Blog</Link>
      </div>
      <input type="text" name="" id="" placeholder="Search Blog" />
      <div className="blogs-item-w">
        <>
          {blogs.map((item, index) => (
            <div className="blog-card" key={item?.id}>
              <h1>{item?.title}</h1>
              <div className="date">{item?.date}</div>
              <div className="category">{item?.category}</div>
              <p className="info">{item?.description}</p>
              <Link href={`/blogs/${item?.id}`} className="read-more-btn">
                Read More
              </Link>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Blogs;
