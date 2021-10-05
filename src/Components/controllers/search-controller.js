import React from 'react';
import { Button, Input } from 'reactstrap';

const SearchPanel = ({ task, handleSearch, toggleForm }) => (
	<div className='d-flex'>
		<Input
			placeholder='Enter Search Term'
			className='me-3'
			value={task}
			onChange={e => handleSearch(e.target.value)}
		/>
		<Button color='primary' onClick={toggleForm}>
			New
		</Button>
	</div>
);
export default SearchPanel;
