import Link from "next/link";

const getBlogs = async () => {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        next: { revalidate: 1 }
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_BLOGS, GET)
    const blogs = await res.json()
    return blogs;
}

const BlogsCard = async () => {
    const blogs = await getBlogs();
    return (
        <>
            {blogs.map((blog, index) => (
                <div className="blog-card" key={blog?.id}>
                    <h1>{blog?.title}</h1>
                    <div className="date">{blog?.date}</div>
                    <div className="category">{blog?.category}</div>
                    <p className="info">{blog?.description}</p>
                    <Link href={`/blogs/${blog?.id}`} className="read-more-btn">Read More</Link>
                </div>
            ))}
        </>
    )
}

export default BlogsCard;