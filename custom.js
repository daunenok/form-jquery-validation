$(document).ready(function() {
	$("form").validate({
		rules: {
			email: {required: true, email: true},
			emailConfirm: {required: true, email: true, equalTo: "#email"},
			country: {minlength: 3},
			zip: {digits: true, minlength: 6},
			pass: {required: true, minlength: 6},
			passConfirm: {required: true, equalTo: "#pass"}
		},
		submitHandler: function(form) {
			$(".wrapper").hide();
			$(".alert").show();
		}
	});
});