import React from 'react';
import { Col, Row } from 'reactstrap';
import BulkControl from './bulk-control';
import Filter from './filter';
import SearchPanel from './search-controller';
import ViewControl from './view-controller';

const Controller = ({
	task,
	view,
	handleSearch,
	toggleForm,
	handleFilter,
	changeView,
	clearSelected,
	clearCompleted,
	reset,
}) => {
	return (
		<div className='my-3'>
			<SearchPanel
				task={task}
				handleSearch={handleSearch}
				toggleForm={toggleForm}
			/>
			<div className='my-3'>
				<Row>
					<Col md={{ size: 4 }}>
						<Filter handleFilter={handleFilter} />
					</Col>
					<Col md={{ size: 4 }} className='d-flex'>
						<div className='mx-auto'>
							<ViewControl view={view} changeView={changeView} />
						</div>
					</Col>
					<Col md={{ size: 4 }} className='d-flex'>
						<div className='ms-auto'>
							<BulkControl
								clearSelected={clearSelected}
								clearCompleted={clearCompleted}
								reset={reset}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Controller;
