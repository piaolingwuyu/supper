var shopcartpl=require('../tpl/shopcar.string');
SPA.defineView('shopcar',{
	html:shopcartpl,
	init:{vm:null},
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.content='';
		}
	}],
	bindActions:{
		'tap.touch':function(e,data){
		   SPA.router.back();
		 
		},
		'tap1':function(){
			SPA.open('dialog',{
				ani:{
					name:'actionSheet',
					"distance":407,
					"autoHide": false

				}
			})
		}
		
	},
	bindEvents:{
		"beforeShow":function(){
			this.vm=this.getVM();
            this.vm.content='请选择地区'
		},
		receiveData:function(data){
			this.vm=this.getVM();
            this.vm.content = data.data.backData;

		}
		
	}
});