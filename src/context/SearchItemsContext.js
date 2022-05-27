import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
	searchItems: null,
	setSearchItems: () => {}
};

const SearchItemsContext = createContext(initialState);

SearchItemsProvider.propTypes = {
	children: PropTypes.node
};

function SearchItemsProvider({ children }) {
	const [searchItems, setSearchItems] = useState(null);

	return (
		<SearchItemsContext.Provider
			value={{
				searchItems,
				setSearchItems
			}}
		>
			{children}
		</SearchItemsContext.Provider>
	);
}
export { SearchItemsProvider, SearchItemsContext };
