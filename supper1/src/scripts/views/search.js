var searchtpl=require('../tpl/search.string');
SPA.defineView('search',{
	html:searchtpl,
	init:{
		  vm:null,
		  create:function(b){
               var content1=$('<div class="three">'+b+'</div>');
               $('.second').prepend(content1);
		  },
		  t:[],
		  method:function(d){
		  	SPA.open('show',{
		  		param:{
		  			x:d
		  		}
		  	})
		  }
		  
	},
	plugins:['delegated',{
       name:'avalon',
       options:function(vm){
       	 vm.title=null;
       }
	}],
	bindActions:{
		'tap.touch':function(e,data){
			if($.inArray(data.tag,this.t)==-1){
              this.t.push(data.tag);
		   	  this.create(data.tag);
			}
			this.method(data.tag);
		},	
         'tap':function(e,data){

         	if($.inArray($('.yo-input').val(),this.t)==-1&& $('.yo-input').val()!=''){
              this.t.push($('.yo-input').val());
		   	  this.create($('.yo-input').val());
			  this.method($('.yo-input').val())
			}else if( $('.yo-input').val()==''){
				SPA.open('show2');
			}
		   
         },
         'remove':function(){
         	$('.second').children().remove();
         	this.t=[];
         },
         'clear':function(){
         	$('.yo-input').val("");
         }
		
	},
	bindEvents:{
		'beforeShow':function(){

		}
		
	}
});