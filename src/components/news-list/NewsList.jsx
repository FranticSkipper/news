import Link from "next/link";

export default function NewsList({ news }) {
    const arrToRender = news.map((item) => (
        <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
                <img
                    src={`/images/news/${item.image}`}
                    alt={item.title}
                />
                <span>{item.title}</span>
            </Link>
        </li>
    ));
    return (
        <>
            <ul className="news-list">
                {arrToRender}
            </ul>
        </>
    );
}