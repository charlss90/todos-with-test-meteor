Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  render() {
    var checkedClassName = this
      .getTask()
      .checked
      ? 'checked'
      : '';

    return (
      <li className={checkedClassName}>
        <button className="delete" onClick={this.delete}>
          &times;
        </button>
        <input type="checkbox" readOnly={true} checked={this
          .getTask()
          .checked} onClick={this.toggleChecked}/>
        <span className="text">{this
            .getTask()
            .text}</span>
      </li>
    );
  },

  toggleChecked() {
    var task = this.getTask();

    Tasks.update(task._id, {
      $set: {
        checked: !task.checked
      }
    });
  },

  delete() {
    Tasks.remove(this.getTask()._id);
  },

  getTask() {
    return this.props.task;
  }
});
