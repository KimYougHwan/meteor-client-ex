Session.setDefault('page', 'A_dataManagement');

Template.index.helpers({
	currentContents: function (page) {
		return Session.get('page');
	}
});

Template.index.events({
	'click .changeContents': function (event, template) {
		Session.set('page', event.currentTarget.getAttribute('data-page'));
	}
});