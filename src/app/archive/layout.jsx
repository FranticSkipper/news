export default function ArchiveLayout({ archive, latest }) {
  return (
    <main>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive} </section>
      <section id="archive-latest">{latest}</section>

    </main>
  );
}