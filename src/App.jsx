import { useState } from "react";
import SearchBar from "./components/searchbar";
import ProductResults from "./components/ProductResults";

function App() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
  const res = await fetch(`/.netlify/functions/searchProduct?query=${query}`);
  const data = await res.json();
  setResults(data);
};

  return (
  <div className="max-w-3xl mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">CircuitSpeak</h1>

    <SearchBar onSearch={handleSearch} />
    <ProductResults results={results} />
  </div>
  );
}

export default App;
