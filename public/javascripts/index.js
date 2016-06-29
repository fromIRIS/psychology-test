var QuesControl = function () {
	this.ajaxUrl = '/api/submit';
	this.$form = $('#J_QuestionForm');
}
QuesControl.prototype = {
	bindEvent: function () {
		var self = this;

		self.$form.on('submit', function (ev) {
			ev.preventDefault();
			loading.show();
			$.ajax({
				type: 'post',
				url: self.ajaxUrl,
				data: $(this).serializeArray(),
				success: function (data) {
					var html = template('J_Temp', data.data);
					loading.hide();
					$('body').append(html);
				}
			})
		})
	},
	init: function () {
		var self = this;

		self.bindEvent();
	}
}

$(function () {
	new QuesControl().init();
})