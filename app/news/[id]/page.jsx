export default function NewsDetailPage({ params }) {
  const { id } = params;

  return (
    <>
      <h1>News details page</h1>
      <p>News ID: {id}</p>
    </>
  );
}
