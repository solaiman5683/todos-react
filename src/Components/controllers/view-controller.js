import React from 'react';
import { CustomInput, Label } from 'reactstrap';

const ViewControl = ({ view, changeView }) => {
	return (
		<div className='d-flex'>
			<Label for='list-view' className='me-4'>
				<CustomInput
					type='radio'
					name='view'
					value='list'
					id='list-view'
					onChange={changeView}
					className='d-inline-block m-1'
					checked={view === 'list'}
                />
                 List View
			</Label>
			<Label for='table-view' className='me-4'>
				<CustomInput
					type='radio'
					name='view'
					value='table'
					id='table-view'
					onChange={changeView}
					className='d-inline-block m-1'
					checked={view === 'table'}
                />
                 Table view
			</Label>
		</div>
	);
};

export default ViewControl;
