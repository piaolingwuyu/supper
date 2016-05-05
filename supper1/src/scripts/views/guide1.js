var guide1tpl=require('../tpl/guide1.string');
SPA.defineView('guide1',{
	html:guide1tpl,
	plugins:['delegated'],
	bindActions:{
		'tap.index':function(){
    
			SPA.open('index');
			localStorage.a=5;

		}
	},
	bindEvents:{
		'beforeShow':function(){
			var myswiper1=new Swiper("#guide1",{
				loop:false
			})
		}
	}
});