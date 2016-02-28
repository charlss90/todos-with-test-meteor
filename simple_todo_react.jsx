if (Meteor.isClient) {
  Meteor.startup(()   => {
    ReactDOM.render(<App />, document.getElementById('app'));
  })
}
