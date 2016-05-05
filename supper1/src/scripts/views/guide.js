var guidetpl=require('../tpl/guide.string');
SPA.defineView('guide',{
	html:guidetpl,
	plugins:['delegated'],
	bindActions:{
	},
	bindEvents:{
		'beforeShow':function(){
			if(localStorage.a==null){
				setTimeout(function(){
								SPA.open('guide1');
							},2000);

			}else{
              setTimeout(function(){
								SPA.open('index');
							},3000);

			}
			
		}
	}
});