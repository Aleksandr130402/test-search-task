import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const initialState = {
	searchValue: '',
	topicValue: '',
	searchButton: false,
	onSearchValue: () => {},
	onTopicValue: () => {},
	onSearchButton: () => {}
};

const SearchPanelContext = createContext(initialState);

SearchPanelProvider.propTypes = {
	children: PropTypes.node
};

function SearchPanelProvider({ children }) {
	const [search, setSearch] = useState({
		value: '',
		topic: '',
		button: false
	});
	const onTopicValue = (topic) => {
		setSearch({ ...search, topic });
	};

	const onSearchValue = (event) => {
		setSearch({ ...search, value: event.target.value });
	};
	const onSearchButton = (value) => {
		if (search.value !== '') {
			setSearch({ ...search, button: value });
		}
	};
	return (
		<SearchPanelContext.Provider
			value={{
				searchValue: search.value,
				topicValue: search.topic,
				searchButton: search.button,
				onSearchValue,
				onTopicValue,
				onSearchButton
			}}
		>
			{children}
		</SearchPanelContext.Provider>
	);
}
export { SearchPanelProvider, SearchPanelContext };
