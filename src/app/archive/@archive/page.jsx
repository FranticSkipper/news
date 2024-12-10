import Link from "next/link";
import { getAvailableNewsYears } from "../../../../lib/news";

const ArchivePage = () => {
    const links = getAvailableNewsYears();
    const linksToRender = links.map(link => (
        <li key={link}>
            <Link href={`/archive/${link}`}>{link}</Link>
        </li>
    ));

    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {linksToRender}
                </ul>
            </nav>
        </header>
    );
}

export default ArchivePage;