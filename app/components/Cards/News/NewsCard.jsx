import Link from "next/link";

async function getNews() {

    const GET = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const res = await fetch(process.env.NEXT_PUBLIC_API_URL_NEWS, GET)
    const data = await res.json()
    return data;
}

const NewsCard = async () => {
    const news = await getNews()
    return (
        <>
            {news.map((item, index) => (
                <div className="news-card" key={item.id}>
                    <img src={item.photourl} alt="" className="photo" />
                    <div className="info-w">
                        <div className="date--category">
                            <div className="date"> {item.date} |</div>
                            <div className="category"> {item.category} </div>
                        </div>
                        <h2 className="title"> {item.title} </h2>
                        <p className="description"> {item.desc} </p>
                        <Link href={`/news/${item.id}`} className="read-more-btn">Read More</Link>
                    </div>
                </div>
            ))}
        </>
    );
}



export default NewsCard;