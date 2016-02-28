describe('Task Component Should', function() {
	var taskComponent, taskElement;
	var taskProps = {
		_id: 1,
		text: 'Hello wolrd!'
	};

	beforeEach(function() {
		buildComponent(taskProps);
	});

	var buildComponent = function(taskProps) {
		taskComponent = renderComponent(Task, {
			task: taskProps
		});
		taskElement = getElementByComponent(taskComponent);
	}

	it('show task text message when render component given a valid taskProps', function() {

		// Assert
		expect(taskElement.querySelector('span.text').innerHTML)
			.toEqual(taskProps.text);
	});

	it('update property when toggle check', function() {
		// Arrange
		var updateMock = spyOn(Tasks, 'update');

		// Act
		taskComponent.toggleChecked();

		// Assert
		expect(Tasks.update)
			.toHaveBeenCalled();

		var args = updateMock.calls.argsFor(0);
		expect(args.length)
			.toBe(2);

		expect(args[0])
			.toBe(taskProps._id);

		var secondArgs = args[1];
		expect(secondArgs)
			.not.toBeNull();
		expect(secondArgs.$set.checked)
			.toBeTruthy();
	});


	it('uncheck task when double checked', function() {
		// Arrange
		var updateMock = spyOn(Tasks, 'update');
		updateMock.and.callFake(function(id, set) {
			taskProps.checked = set.$set.checked;
		});

		// Act
		taskComponent.toggleChecked();
		taskComponent.toggleChecked();

		// Assert
		expect(updateMock.calls.count())
			.toBe(2);
		var secondCallArgs = updateMock.calls.argsFor(1);

		expect(secondCallArgs[1].$set.checked)
			.not.toBeTruthy();
	});


	it('call remove Tasks method when delete', function() {
		// Arrange
		var removeMock = spyOn(Tasks, 'remove');

		// Act
		taskComponent.delete();

		// Arrange
		expect(removeMock)
			.toHaveBeenCalled();

		expect(removeMock.calls.argsFor(0)[0])
			.toBe(taskProps._id);
	});
});
