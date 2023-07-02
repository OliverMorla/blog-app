import Link from "next/link";
import "./page.scss"

const getCategories = async () => {
  const res = await fetch(process.env.API_URL + "/blogs/categories", {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
};

const getBlogs = async () => {
  const res = await fetch(process.env.API_URL + "/blogs", {
    method: "GET",
    cache: "no-store",
  });
  return res.json();
};

const Blogs = async () => {
    const categories = await getCategories();
    const blogs = await getBlogs();

    return (
        <div className="blog-w">
            <div className="heading-w">
                <h1> Blog <sub> App </sub> </h1>
                <div className="categories-w">
                    {categories.map((item, index) => (
                        <Link href={`/blogs/categories?query=${item?.category}`}>
                            <button className="category-item">
                                {item?.category} ({item?.count})
                            </button>
                        </Link>
                    ))}
                </div>
                <Link href={'blogs/create'}>
                    Create Blog
                </Link>
            </div>
            <input type="text" name="search" id="" placeholder="Search Blog" />
            <div className="blogs-item-w">
                {blogs.map((blog, index) => (
                    <div className="blog-card" key={blog?.id}>
                        <h1>{blog?.title}</h1>
                        <div className="date">{blog?.date}</div>
                        <div className="category">{blog?.category}</div>
                        <p className="info">{blog?.description}</p>
                        <Link href={`/blogs/${blog?.id}`} className="read-more-btn">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blogs;