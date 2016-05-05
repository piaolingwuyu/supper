var mytpl=require('../tpl/my.string');
SPA.defineView('my',{
	html:mytpl,
	plugins:['delegated'],
	bindActions:{
		'tap.touch':function(){
			SPA.open('login');
		}
			
		
	},
	bindEvents:{
		
		
	}
});