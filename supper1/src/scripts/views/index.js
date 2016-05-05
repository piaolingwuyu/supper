var indextpl=require('../tpl/index.string');
SPA.defineView('index',{
	html:indextpl,
	plugins:['delegated'],
	modules:[{
         name:'content1',
         container:'.imgbox',
         views:['home','my','menu','shopcar','search'],
         defaultTag:'home'
		}],
	bindActions:{
		'tap.style':function(e,data){
			$(e.el).addClass('active').siblings().removeClass('active');
			 this.modules.content1.launch(data.tag);
			}
	},
	bindEvents:{
		
		
	}
});