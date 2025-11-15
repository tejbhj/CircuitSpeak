import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProductResults from "./components/ProductResults";

function App() {
  const [results, setResults] = useState([]);

  // TEMP: Dummy search function
  const handleSearch = (query) => {
    console.log("Searching for:", query);

    // Dummy fake results just to prove it works
    const fakeData = [
      { name: `${query} — Fake result #1` },
      { name: `${query} — Fake result #2` },
      { name: `${query} — Fake result #3` },
    ];

    setResults(fakeData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CircuitSpeak</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductResults results={results} />
    </div>
  );
}

export default App;
