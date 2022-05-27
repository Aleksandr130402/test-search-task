import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useSearchPanel from '../hooks/useSearchPanel';

export default function SelectTopic() {
	const [topic, setTopic] = useState('person');
	const { onTopicValue } = useSearchPanel();

	const handleChange = (event) => {
		setTopic(event.target.value);
	};

	useEffect(() => {
		onTopicValue(topic);
	}, [topic]);

	return (
		<Box sx={{ minWidth: 120, my: '1rem' }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">Select Topic</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={topic}
					label="Topic"
					onChange={handleChange}
				>
					<MenuItem value="person">Person</MenuItem>
					<MenuItem value="planets">Planets</MenuItem>
					<MenuItem value="starships">Starships</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
