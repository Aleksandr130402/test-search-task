import React, { useEffect } from 'react';

import useSearchItems from '../../hooks/useSearchItems';

import Page from '../../components/Page';
import SearchPanelLayout from '../../layouts/SearchPanelLayout';

import styles from '../../../styles/Detail.module.css';

Detail.getLayout = function getLayout(page) {
	return <SearchPanelLayout>{page}</SearchPanelLayout>;
};

export default function Detail() {
	const { searchItems } = useSearchItems();

	return (
		<Page title="Detail">
			<div className={styles.searchItemList}>
				{searchItems && searchItems.length > 0 ? (
					searchItems.map((item) => (
						<div className={styles.searchListItem} key={item.id}>
							<img
								src={item.image}
								onError={({ currentTarget }) => {
									currentTarget.onerror = null;
									currentTarget.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
								}}
								alt="search-image"
								className={styles.searchImage}
							/>
							<div className={styles.searchItemName}>{item.name}</div>
						</div>
					))
				) : (
					<h2>No item was found.</h2>
				)}
			</div>
		</Page>
	);
}
