import { useContext } from 'react';
import { SearchItemsContext } from '../context/SearchItemsContext';

const useSearchItems = () => useContext(SearchItemsContext);

export default useSearchItems;
