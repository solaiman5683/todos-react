import React from 'react';
import { Button, CustomInput, Table } from 'reactstrap';

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
	return (
		<>
			<h2>Table View</h2>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Time</th>
						<th>Todo</th>
						<th>Description</th>
						<th className='text-center'>Action</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo => (
						<TableItem
							todo={todo}
							key={todo.id}
							toggleSelect={toggleSelect}
							toggleComplete={toggleComplete}></TableItem>
					))}
				</tbody>
			</Table>
		</>
	);
}
const TableItem = ({ todo, toggleSelect, toggleComplete }) => (
	<>
		<tr>
			<th scope='row'>
				<CustomInput
					type='checkbox'
					id={todo.id}
					checked={todo.isSelected}
					onChange={() => toggleSelect(todo.id)}
				/>
			</th>
			<th>{todo.time}</th>
			<th className='text-capitalize'>{todo.task}</th>
			<th className='text-capitalize text-muted'>{todo.description}</th>
			<th className='text-center'>
				<Button
					color={todo.isCompleted ? 'danger' : 'success'}
					className='ms-auto'
					onClick={() => toggleComplete(todo.id)}>
					{todo.isCompleted ? 'Completed' : 'Running'}
				</Button>
			</th>
		</tr>
	</>
);

export default TableView;
