var showtpl=require('../tpl/show.string');
SPA.defineView('show',{
	html:showtpl,
	init:{vm:null},
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
           vm.title='';
		}
	}],
	bindActions:{
		'back':function(){
			SPA.router.back();
		}
	},
	bindEvents:{
		'beforeShow':function(){

		},
		'show':function(){
			this.vm=this.getVM();
			this.vm.title=this.param.x;
		}

	}
})