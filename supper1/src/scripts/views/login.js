var logintpl=require('../tpl/login.string');
SPA.defineView('login',{
	html:logintpl,
	plugins:['delegated'],
	bindActions:{
		'back1':function(){
			this.hide();
		},
		'register':function(){
			SPA.open('register');
		}
	},
	bindEvents:{
		
		
	}
});