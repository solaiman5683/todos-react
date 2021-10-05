import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class TodoForm extends React.Component {
    state = { task: '', description: '' };
	handleSubmit = e => {
		e.preventDefault();
        this.props.createTodo(this.state);
        e.target.reset();
		this.setState({ task: '', description: '' });
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
    render() {
        return <div>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup className='my-3'>
                <Label>Entar Task</Label>
                <Input
                    placeholder="Do some Code"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
            </FormGroup>
            <FormGroup className='my-3'>
                <Label>Describe Task</Label>
                <Input
                    placeholder="Write some description about the task"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
            </FormGroup>
            <Button type="submit">Create Task</Button>
        </Form>
    </div>;
    }
};

export default TodoForm;
