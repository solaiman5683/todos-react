import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const BulkControl = ({ clearSelected, clearCompleted, reset }) => {
	return (
		<div>
			<ButtonGroup className='ms-auto'>
				<Button color='danger' onClick={clearSelected}>
					Clear Selected
				</Button>
				<Button color='danger' onClick={clearCompleted}>
					Clear Completed
				</Button>
				<Button color='danger' onClick={reset}>
					Reset
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default BulkControl;
