import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        placeholder="Search a device…"
        onChange={(e) => setQuery(e.target.value)}
        style={{ flex: 1, padding: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
        Search
      </button>
    </form>
  );
}
