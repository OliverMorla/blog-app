import Link from "next/link";
import "./page.scss"

const Blogs = async ({ searchParams: { query } }) => {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = await fetch(process.env.NEXT_PUBLIC_BLOG_CATEGORIES_URL, GET)
    const categories = await res.json()

    const filtedBlogs = await fetch(process.env.NEXT_PUBLIC_BLOG_CATEGORIES_URL + `/search?query=${query}`, GET)
    const blogs = await filtedBlogs.json()

    return (
        <div className="blog-w">
            <div className="heading-w">
                <h1> Blog <sub> App </sub> </h1>
                <div className="categories-w">
                    {categories.map((item, index) => (
                        <>
                            <Link href={`/blogs/categories?query=${item?.category}`}>
                                <button className="category-item">{item?.category} ({item?.count})</button>
                            </Link>
                        </>
                    ))}
                </div>
                <Link href={'blogs/create'}>Create Blog</Link>
            </div>
            <input type="text" name="" id="" placeholder="Search Blog" />
            <div className="blogs-item-w">
                <>
                    {blogs.map((item, index) => (
                        <div className="blog-card" key={item?.id}>
                            <h1>{item?.title}</h1>
                            <div className="date">{item?.date}</div>
                            <div className="category">{item?.category}</div>
                            <p className="info">{item?.desc}</p>
                            <Link href={`/blogs/${item?.id}`} className="read-more-btn">Read More</Link>
                        </div>
                    ))}
                </>
            </div>
        </div>
    );
}

export default Blogs;