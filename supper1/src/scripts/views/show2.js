var show2tpl=require('../tpl/show2.string');
SPA.defineView('show2',{
	html:show2tpl,
	init:{
		vm:null,
		time:function(){
            var d=new Date(); 
			var year=d.getFullYear(); 
			var month=d.getMonth()+1; 
			var day=d.getDate(); 
			var week=d.getDay(); 
			var h=d.getHours(); 
			var mins=d.getMinutes(); 
			if(month<10) month="0" + month 
			if(day<10) month="0" + day 
			if(h<10) h="0" + h 
			if(mins<10) mins="0" + mins; 
			var shows="最后刷新:" + year + "年" + month + "月" + day + "日" + h + ":" + mins; 
			return shows;
        }
		
	},
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
           vm.title='';
           vm.time1='';
		}
	}],
	bindActions:{
		'back':function(){
			SPA.router.back();
			//this.hide();
		}
	},
	bindEvents:{
		'beforeShow':function(){
         var myScroll = new IScroll('.wrapper', {
	        probeType: 3,
	        mouseWheel: true
         });
         this.vm=this.getVM();
         var time2=this.time();
         this.vm.time1=time2;
         myScroll.scrollBy(0, -51);
         var head = $('.head1 img');
         //topImgHasClass = head.hasClass('up');
         var foot = $('.foot img');
         //bottomImgHasClass = head.hasClass('down');
         var self=this;
         myScroll.on('scroll', function () {
         var that=self;
         console.log(that);
           var y = this.y,
            maxY = this.maxScrollY - y;
        if (y >= 0) {
            head.addClass('up');
            $(".head1 p>span").eq(0).html("松手即可更新");
             that.vm.time1=that.time();
            return '';
        }
        if (maxY >= 0) {
            foot.addClass('down');
            return '';

        }
       
    });
    myScroll.on('scrollEnd', function () {
        if (this.y >= -51 && this.y < 0) {
            myScroll.scrollTo(0, -51);
            head.removeClass('up');
            
        } else if (this.y >= 0) {
        	$(".head1 p>span").eq(0).html("正在更新");
            head.attr('src', '/supper/img/ajax-loader.gif');
            setTimeout(function () {
                myScroll.scrollTo(0, -51);
                head.removeClass('up');
                head.attr('src', '/supper/img/arrow.png');
                $(".head1 p>span").eq(0).html("下拉刷新...");
            }, 1000);
        }

        var maxY = this.maxScrollY - this.y;
        if (maxY > -51&& maxY < 0) {
            var self = this;
            myScroll.scrollTo(0, self.maxScrollY + 51);
            foot.removeClass('down')
        } else if (maxY >= 0) {
            foot.attr('src', '/supper/img/ajax-loader.gif');
            //TODO ajax上拉加载数据
            var self = this;
            setTimeout(function () {
                myScroll.refresh();
                myScroll.scrollTo(0, self.y + 51);
                foot.removeClass('down');
                foot.attr('src', '/supper/img/arrow.png');
            }, 1000);
        }
      })

     }
    }	
		
  })