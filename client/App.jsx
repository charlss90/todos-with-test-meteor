App = React.createClass({

  mixins: [ReactMeteorData],

  getTasks() {
    return this.data.tasks;
  },

  getMeteorData() {
    return {
      tasks: Tasks
        .find({})
        .fetch()
    };
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
          <AddTaskForm/>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  },

  renderTasks() {
    return this
      .getTasks()
      .map((task) => {
        return <Task key={task._id} task={task}/>;
      });
  },
});
