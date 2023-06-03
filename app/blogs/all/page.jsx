import BlogsCard from "@/app/components/Blogs/BlogsCard";
import Link from "next/link";
import "./page.scss"

const Blogs = () => {
    return (
        <div className="blog-w">
            <div className="heading-w">
                <h1> Blog <sub> App </sub></h1>
                <button> Preferences </button>
                <Link href={'blogs/create'}>Create Blog</Link>
            </div>
            <input type="text" name="" id="" placeholder="Search Blog" />
            <div className="blogs-item-w">
                <BlogsCard />
            </div>
        </div>
    );
}

export default Blogs;