import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./page.scss"

const Post = async ({ params: { news: id } }) => {
    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_NEWS, GET)
    const data = await res.json()
    const post = data.find(item => item.id === parseInt(id))

    return (
        <div className="container">
            <img src={post?.photourl} alt="" className="blog-photo" />
            <div className="blog-header-w">
                <div className="blog-info-w">
                    <div className="user-w">
                        <img src={"/user-icon.png"} alt="" className="user-photo" />
                        <h3 className="author">User</h3>
                    </div>
                    <div className="blog-info--w">
                        <div className="date">{post?.date}</div>
                        <div className="category">{post?.category}</div>
                    </div>
                    <div className="manage-btn-w">
                        <Link href={'/blogs/delete'}>
                            <FontAwesomeIcon icon={faTrash} className="delete-btn" />
                        </Link>
                        <Link href={'/blogs/create'}>
                            <FontAwesomeIcon icon={faUserPen} className="edit-btn" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="blog-content-w">
                <h1 className="blog-title">{post?.title}</h1>
                <p>
                    {post?.desc}
                </p>
            </div>
        </div>
    );
}

export default Post;
