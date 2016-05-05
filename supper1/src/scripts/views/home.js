var hometpl=require('../tpl/home.string');
SPA.defineView('home',{
	html:hometpl,
	plugins:['delegated'],
	bindActions:{
		
			
		
	},
	bindEvents:{
		'beforeShow':function(){
			var swiper2=new Swiper('#homeshow',{
				direction:'horizontal',
				loop:true,
				autoplay:2000,
				autoplayDisableOnInteraction:false,
				pagination : '.swiper-pagination'

			});
          
		}
		
	}
});