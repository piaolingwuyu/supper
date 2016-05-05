var registertpl=require('../tpl/register.string');
SPA.defineView('register',{
	html:registertpl,
	init:{
		vm:null
	},
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
           vm.title='';
		}
	}],
	bindActions:{
		'back2':function(){
			this.hide();
		},
		'get':function(){
		    var self=this;
			setTimeout(function(){
              var num=parseInt(Math.random()*10000);
              self.vm=self.getVM();
		      self.vm.title=num;

              },1000);
			 
		}

	},
	bindEvents:{
		
		
	}
});