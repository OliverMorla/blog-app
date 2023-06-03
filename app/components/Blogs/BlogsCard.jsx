import Link from "next/link";

const getBlogs = async () => {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_BLOGS, GET)
    const data = await res.json()
    return data;
}


const BlogsCard = async () => {
    const blogs = await getBlogs();
    return (
        <>
            {blogs.map((item, index) => (
                <div className="blog-card" key={item.id}>
                    <h1>{item.title}</h1>
                    <div className="date">{item.date}</div>
                    <div className="category">{item.category}</div>
                    <p className="info">{item.desc}</p>
                    <Link href={`/blogs/all/${item.id}`} className="read-more-btn">Read More</Link>
                </div>
            ))}
        </>
    )
}

export default BlogsCard;