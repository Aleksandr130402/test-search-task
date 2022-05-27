import { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

// import styles from '../../styles/Home.module.css';

import useSearchItems from '../hooks/useSearchItems';

import SearchPanelLayout from '../layouts/SearchPanelLayout';
import Page from '../components/Page';

Home.getLayout = function getLayout(page) {
	return <SearchPanelLayout>{page}</SearchPanelLayout>;
};

export default function Home() {
	const { searchItems } = useSearchItems();
	const { push } = useRouter();

	const goToDetails = () => {
		push('/detail');
	};

	useEffect(() => {
		if (searchItems) {
			goToDetails();
		}
	}, [searchItems]);

	return (
		<Page title="Home">
			<h2>Home page</h2>
		</Page>
	);
}
