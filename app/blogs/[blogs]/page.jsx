import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "./page.scss"

const Blog = async ({ params: { blogs: id } }) => {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const res = await fetch(process.env.API_URL + "/blogs", GET)
    const data = await res.json()
    const post = data.find(item => item.id === parseInt(id))

    return (
        <div className="container">
            <div className="blog-header-w">
                <img src="/user-icon.png" alt="" className="user-photo" />
                <h3 className="author">User</h3>
                <div className="blog-info-w">
                    <div className="date">{post?.date}</div>
                    <div className="category">{post?.category}</div>
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
            <img src={post?.photourl} alt="" />
            <div className="blog-content-w">
                <h1 className="blog-title">{post?.title}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi qui quibusdam saepe fuga, alias fugit tempore animi nobis aliquid voluptatem deserunt officia beatae harum esse, autem sint incidunt earum possimus.
                    Vero nihil iste, neque quibusdam velit, minus deserunt nam consectetur culpa voluptas consequatur? Minus quos dolorem quo, dolorum aut non reprehenderit impedit culpa veritatis rerum exercitationem error et deleniti odio.
                    Odio nihil optio, ipsam cum voluptate nam nesciunt doloribus adipisci nobis eaque consequuntur porro reiciendis asperiores sed modi, minima, maxime ea alias quaerat. Placeat, laborum explicabo voluptas amet tempora accusantium.
                    <br />
                    <br />
                    Ipsum aperiam voluptas omnis? Nulla quia sequi illo saepe doloribus sint eum, quos quae ad maxime tempore aliquam earum dolores nisi magni molestiae molestias magnam est numquam officiis quis inventore.
                    Ratione architecto ex a doloribus voluptatum vitae excepturi. Assumenda, dignissimos impedit! Iusto, ea natus. Quisquam, aperiam? Vitae ea consequatur aspernatur explicabo? Similique iure eaque praesentium maxime quasi, ratione sit earum.
                    Blanditiis fugit rerum, fugiat mollitia et officia veritatis asperiores consequatur sunt architecto nostrum nesciunt suscipit error vero non quae repellendus placeat ipsam, voluptatem a doloribus dolorum nam voluptate! Iste, sit!
                    Nesciunt cum maiores numquam consectetur exercitationem harum, molestias ex ullam quae deserunt dignissimos omnis doloribus dolore, amet fugiat ea quas quasi. Ipsam officia alias voluptatum quae unde, aut blanditiis cupiditate!
                    <br />
                    <br />
                    Praesentium ratione laboriosam autem accusantium dolorem dignissimos, fugiat minima iure eos vitae nisi, molestiae necessitatibus veritatis quam, consectetur nobis sunt maiores in! Magni at reprehenderit, deserunt minima temporibus soluta corporis.
                    Quisquam atque at, laudantium, repudiandae aspernatur, quos inventore dolorem fugit dolores laborum molestias. Animi est, quam minus quae ipsa quasi suscipit eum odio dolores, sunt iste nostrum temporibus, explicabo unde.
                    Eveniet blanditiis, dolore iste ab suscipit recusandae voluptate harum magnam fugiat asperiores et hic animi aliquam atque quos quasi repellat? Fugiat corrupti vitae earum optio vel voluptatibus maiores asperiores dolorum?
                </p>
            </div>
        </div>
    );
}

export default Blog;