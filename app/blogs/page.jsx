import BlogsCard from "@/app/components/Cards/Blogs/BlogsCard";
import Link from "next/link";
import "./page.scss"

const Blogs = async () => {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const res = await fetch(process.env.NEXT_PUBLIC_BLOG_CATEGORIES_URL, GET)
    const categories = await res.json()

    return (
        <div className="blog-w">
            <div className="heading-w">
                <h1> Blog <sub> App </sub></h1>
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
            <input type="text" name="search" id="" placeholder="Search Blog" />
            <div className="blogs-item-w">
                <BlogsCard />
            </div>
        </div>
    );
}

export default Blogs;