import { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [delayTimer, setDelayTimer] = useState(null);

  const fetchData = (value) => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}productos`)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((products) => {
          return (
            value &&
            products &&
            products.nombre &&
            products.nombre.toLowerCase().includes(value)
          );
        });
        setResults(results);
        console.log(results);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);

    if(delayTimer) {
      clearTimeout(delayTimer);
    }

    const newDelayTimer = setTimeout(() => {
      fetchData(value);
    }, 1000);

    setDelayTimer(newDelayTimer);
  };

  useEffect(() => {
    // Limpiar el temporizador al desmontar el componente
    return () => {
      if (delayTimer) {
        clearTimeout(delayTimer);
      }
    };
  }, [delayTimer]);


  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
