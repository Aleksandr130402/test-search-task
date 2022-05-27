import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import SearchPanel from '../components/SearchPanel';
import useSearchItems from '../hooks/useSearchItems';
import useSearchPanel from '../hooks/useSearchPanel';
import SwapiService from '../service/swapiservice';

SearchPanelLayout.propTypes = {
	children: PropTypes.node
};

export default function SearchPanelLayout({ children }) {
	const [data, setData] = useState(null);

	const { topicValue, searchValue, searchButton, onSearchButton } = useSearchPanel();
	const { setSearchItems } = useSearchItems();

	const swapiService = new SwapiService();

	const searchDetail = () => {
		if (data !== null) {
			return data.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
		}
	};

	const getItemsImages = (items) => {
		for (let item of items) {
			item.image = swapiService.getImage(topicValue, item.id);
		}
		return items;
	};

	const getData = async () => {
		if (topicValue === 'person') {
			const data = await swapiService.getAllPeople();
			setData(data);
		}
		if (topicValue === 'starships') {
			const data = await swapiService.getAllStarships();
			setData(data);
		}
		if (topicValue === 'planets') {
			const data = await swapiService.getAllPlanets();
			setData(data);
		}
	};

	useEffect(() => {
		getData();
	}, [topicValue]);

	useEffect(() => {
		if (searchButton) {
			const items = searchDetail();
			console.log(items);
			const itemsWithImage = getItemsImages(items);
			setSearchItems(itemsWithImage);
			onSearchButton(false);
		}
	}, [searchButton]);
	return (
		<>
			<SearchPanel />

			<main>{children}</main>
		</>
	);
}
