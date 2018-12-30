import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      description: '',
      done: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
        title: '',
        description: '',
        done: false,
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Título"
              />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;