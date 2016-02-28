AddTaskForm = React.createClass({

  render() {
    return (
      <form className='new-task' ref="addTaskForm" onSubmit={this.onSubmit}>
        <input type="text" ref="addTaskInput" placeholder="Type to add new tasks"/>
      </form>
    );
  },

  onSubmit(event) {
    event.preventDefault();

    var taskTextValue = this.getTaskTextValue();

    if (taskTextValue) {
      this.insertNewTaskValue(taskTextValue);
    }
  },

  insertNewTaskValue(text) {
    Tasks.insert({text: text, createdAt: new Date(),});
    this.clearTaskTextValue();
  },

  getTaskTextValue() {
    return this.taskInput().value.trim();
  },

  clearTaskTextValue() {
    this.taskInput().value = '';
  },

  taskInput() {
    return ReactDOM.findDOMNode(this.refs.addTaskInput);
  }
});
