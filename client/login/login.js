Template.login.events({
	'submit #loginForm'(event) {
		console.log('서버 IP 주소 : ' + event.target.ipAddress.value);
		console.log('아이디 : ' + event.target.id.value);
		console.log('비밀번호 : ' + event.target.password.value);
	},
	'click #requestAddUser'(event) {
		console.log(event);
	},
	'click #saveIpAddress'(event) {
		console.log(event.currentTarget.checked);
	},
	'click #saveId'(event) {
		console.log(event.currentTarget.checked);
	}
});

Template.login.onRendered(function() {

});