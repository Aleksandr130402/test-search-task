import React from 'react';

import { useRouter } from 'next/router';

import { Button, TextField } from '@mui/material';

import useSearchPanel from '../hooks/useSearchPanel';
import useSearchItems from '../hooks/useSearchItems';

import SelectTopic from './SelectTopic';

import styles from '../../styles/Detail.module.css';

export default function SearchPanel() {
	const { onSearchButton, onSearchValue, searchValue } = useSearchPanel();
	const { setSearchItems } = useSearchItems();
	const { push, pathname } = useRouter();

	const goToHomePage = () => {
		setSearchItems(null);
		push('/');
	};

	return (
		<div className={styles.searchPanel}>
			<TextField
				name="search"
				id="outlined-basic"
				label="Outlined"
				variant="outlined"
				onChange={(e) => onSearchValue(e)}
				value={searchValue}
			/>
			<SelectTopic />
			<Button sx={{ mx: 2, mb: 2 }} variant="outlined" onClick={() => onSearchButton(true)}>
				Search
			</Button>
			{pathname === '/detail' && (
				<Button sx={{ mx: 2 }} variant="outlined" onClick={goToHomePage}>
					Go to Home
				</Button>
			)}
		</div>
	);
}
