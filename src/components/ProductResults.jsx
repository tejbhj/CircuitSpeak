export default function ProductResults({ results }) {
  if (!results.length) return <p>No results yet. Try searching something.</p>;

  return (
    <div>
      <h2>Search Results (placeholder)</h2>
      <ul>
        {results.map((item, index) => (
          <li
  key={index}
  className="border rounded p-4 mb-4 shadow-sm hover:shadow-md transition"
>
  <strong className="block text-lg">{item.name}</strong>
</li>
        ))}
      </ul>
    </div>
  );
}
