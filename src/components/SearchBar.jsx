import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row gap-3 mb-6"
>
  <input
    type="text"
    value={query}
    placeholder="Search a device…"
    onChange={(e) => setQuery(e.target.value)}
    className="flex-1 p-3 border rounded"
  />

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded"
  >
    Search
  </button>
</form>

  );
}
