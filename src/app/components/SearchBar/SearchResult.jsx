import { Link } from 'react-router-dom';
import "./SearchResultList.css";

export const SearchResult = ({ result, resultId }) => {
  return (
    <Link to={`/product/${resultId}`} className="search-result">
      {result} 
    </Link>
  );
};