import React from 'react';
import { Button, CustomInput, ListGroup, ListGroupItem } from 'reactstrap';

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<div className='my-5'>
			<h1>List View</h1>
			<ListGroup>
				{todos.map(todo => (
					<ListItem
						todo={todo}
						toggleSelect={toggleSelect}
						toggleComplete={toggleComplete}
						key={todo.id}
					/>
				))}
			</ListGroup>
		</div>
	);
};

const ListItem = ({ todo, toggleSelect, toggleComplete }) => (
	<ListGroupItem className='d-flex align-items-center'>
		<CustomInput
			type='checkbox'
			id={todo.id}
			checked={todo.isSelected}
			onChange={() => toggleSelect(todo.id)}
		/>
		<div className='mx-3'>
			<h5 className={todo.isCompleted ? 'text-decoration-line-through text-capitalize' : 'text-capitalize'} title={todo.description}>
				{todo.task}
			</h5>
			<small>{todo.time}</small>
		</div>
		<Button
			color={todo.isCompleted ? 'danger' : 'success'}
			className='ms-auto'
			onClick={() => toggleComplete(todo.id)}>
			{todo.isCompleted ? 'Completed' : 'Running'}
		</Button>
	</ListGroupItem>
);

export default ListView;
