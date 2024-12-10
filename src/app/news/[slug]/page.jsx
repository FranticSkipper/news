import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy_news";

export default async function SlugPage({ params }) {
    const { slug } = await params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <h1>{newsItem.title}</h1>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                <time dateTime={newsItem.date}>{newsItem.date}</time>
            </header>

            <p>{newsItem.content}</p>

        </article>
    );
}