var dialogtpl = require('../tpl/dialog.string');
var js = require('./ssxq.js');
SPA.defineView('dialog', {
	html: dialogtpl,
	init: {
		vm: null,
		each1: function(i) {
			var qq = js[i].cities;
			return qq;
		},
		each2: function() {
			var list2 = [];
			$.each(js, function(i) {
				list2[i] = js[i].name;
			})
			return list2;
		},
		num: null,
		swh: null
	},
	plugins: ['delegated', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];

		}
	}],
	bindActions: {
		'close': function(e, data) {
			this.hide();

		},
		'tap2': function(e, data) {
			this.num = $('#ul>li').length;
			var num2 = $(e.el).index();
			var t = this.each1(num2);
			$('.foot>div').css('display', 'block');
			if (this.num == 33) {
				this.vm = this.getVM();
				this.vm.list = t;
				$("#ul>li").attr('action-type', 'tap5');

			}

		},
		'tap4': function() {
			this.vm = this.getVM();
			this.vm.list = this.each2();
			$('.foot>div').css('display', 'none');
		},
		'tap5': function(e, data) {
			this.swh = $("#ul>li").eq($(e.el).index()).find('.second').html();
			localStorage=this.swh;
			this.hide({
				backData: this.swh
			});

		}

	},
	bindEvents: {
		'beforeShow': function() {
			this.vm = this.getVM();
			this.vm.list = this.each2();
		}

	}
});