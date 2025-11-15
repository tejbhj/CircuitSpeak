export default function ProductResults({ results }) {
  if (!results.length) return <p>No results yet. Try searching something.</p>;

  return (
    <div>
      <h2>Search Results (placeholder)</h2>
      <ul>
        {results.map((item, index) => (
          <li key={index} style={{ marginBottom: "15px", padding: "10px", border: "1px solid #ccc" }}>
            <strong>{item.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
