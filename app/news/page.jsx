import NewsCard from "../components/News/NewsCard";
import "./page.scss"

export const metadata = {
    title: 'Blog App - News',
    description: 'Blog Application',
}

const News = () => {
    return (
        <div className="news-w">
            <h1 className="heading"> Latest News </h1>
            <div className="news-item-w">
                <NewsCard />
            </div>
        </div>
    );
}

export default News;