describe('NewTaskForm Component Should', function() {

	var newTaskFormComponent;

	beforeEach(function() {
		newTaskFormComponent = renderComponent(AddTaskForm);
		spyOn(Tasks, 'insert');
	});

	it('not insert new element when submit form given an invalid text', function() {

		// Act
		Simulate.submit(newTaskFormComponent);

		// Assert
		expect(Tasks.insert)
			.not
			.toHaveBeenCalled();
	});

	it('insert new element when submit form given an valid text input', function() {
		// Arrange
		var newTaskTextValue = 'Hello wolrd!';
		var inputDOM = getTaskInputRefs();
		var inputElement = getTaskInputElement();
		var form = getFormElement();

		inputDOM.value = newTaskTextValue;

		// Act
		Simulate.submit(form);

		// Assert
		expect(Tasks.insert)
			.toHaveBeenCalled();
	});

	it('clear input when submit form given an valid text', function() {
		// Arrange
		var newTaskTextValue = 'Hello wolrd!';
		var inputDOM = getTaskInputRefs();
		var taskInput = newTaskFormComponent.taskInput();
		var form = getFormElement();

		inputDOM.value = newTaskTextValue;

		// Act
		Simulate.submit(form);

		// Assert
		expect(Tasks.insert)
			.toHaveBeenCalled();

		expect(taskInput.value)
			.toBe('');
	});

	var getTaskInputElement = function() {
		return ReactDOM.findDOMNode(getTaskInputRefs());
	};

	var getTaskInputRefs = function() {
		return newTaskFormComponent.refs.addTaskInput;
	}

	var getFormElement = function() {
		return ReactDOM.findDOMNode(newTaskFormComponent.refs.addTaskForm);
	}
});
