import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Controller from '../controllers/controller';
import ListView from '../ListView/ListView';
import TableView from '../TableView/TableView';
import TodoForm from '../todo-form/form';
import shortid from 'shortid';

class Todos extends React.Component {
	state = {
		todos: [
			{
				id: '01',
				task: 'Create a Todo',
				description: 'Track your todos list.',
				time: new Date().toDateString(),
				isSelected: false,
				isCompleted: false,
			}
		],
		isFormOpen: false,
		search: '',
		view: 'list',
		filter: 'all',
	};

	toggleSelect = todoid => {
		const todos = [...this.state.todos];
		const todo = todos.find(t => t.id === todoid);
		todo.isSelected = !todo.isSelected;
		this.setState({ todos });
	};

	toggleComplete = todoid => {
		const todos = [...this.state.todos];
		const todo = todos.find(t => t.id === todoid);
		console.log(todo.isSelected);
		todo.isCompleted = !todo.isCompleted;
		this.setState({ todos });
	};

	toggleForm = () => this.setState({ isFormOpen: !this.state.isFormOpen });

	createTodo = todo => {
		todo.id = shortid.generate();
		todo.time = new Date().toDateString();
		todo.isComplete = false;
		todo.isSelecte = false;

		const newTodos = [todo, ...this.state.todos];
		this.setState({ todos: newTodos });
	};

	handleSearch = value => {
		this.setState({ search: value });
	};

	search = () => {
		return this.state.todos.filter(todo =>
			todo.task.toLowerCase().includes(this.state.search.toLowerCase())
		);
	};

	handleFilter = filter => {
		this.setState({ filter });
	};

	filter = todos => {
		const { filter } = this.state;
		if (filter === 'completed') {
			return todos.filter(todo => todo.isCompleted);
		} else if (filter === 'running') {
			return todos.filter(todo => !todo.isCompleted);
		} else {
			return todos;
		}
	};

	changeView = e => {
		this.setState({
			view: e.target.value,
		});
	};

	clearSelected = () => {
		const todos = this.state.todos.filter(todo => !todo.isSelected);
		this.setState({ todos });
	};

	clearCompleted = () => {
		const todos = this.state.todos.filter(todo => !todo.isCompleted);
		this.setState({ todos });
	};
	reset = () => {
		this.setState({
			search: '',
			view: 'list',
			filter: 'all'
		});
	};

	getView = () => {
		let todos = this.search();
		todos = this.filter(todos);
		return this.state.view === 'list' ? (
			<ListView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		) : (
			<TableView
				todos={todos}
				toggleSelect={this.toggleSelect}
				toggleComplete={this.toggleComplete}
			/>
		);
	};

	render() {
		return (
			<>
				<h1 className='text-center display-3'>Welcome to Todo App.</h1>
				<Controller
					task={this.state.search}
					view={this.state.view}
					handleSearch={this.handleSearch}
					toggleForm={this.toggleForm}
					handleFilter={this.handleFilter}
					changeView={this.changeView}
					clearCompleted={this.clearCompleted}
					clearSelected={this.clearSelected}
					reset={this.reset}
				/>
				{this.getView()}
				<Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
					<ModalHeader toggle={this.toggleForm}>
						Create a new todo item
					</ModalHeader>
					<ModalBody>
						<TodoForm createTodo={this.createTodo}></TodoForm>
					</ModalBody>
				</Modal>
			</>
		);
	}
}

export default Todos;
