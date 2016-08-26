///斯艾商城 js
// by luoqiang


//select 搜索框
$(function(){
	//获取元素变量
	var sBox = $(".select_list");
	var sBoxTitle = sBox.find("strong");
	var sBoxText = sBox.find("span");
	var sBoxItem = sBox.find("ul");
	var sBoxList = sBox.find("li a");
	//下拉框操作
	sBox.each(function(){
		//打开列表
       	sBoxTitle.click(function(){
			if(sBoxItem.is(":hidden")){
				sBoxItem.hide();
				$(this).next("ul").show()
			} else {
				$(this).next("ul").hide()
			}
		});
		//提交内容
		sBoxList.click(function(){
			var html = $(this).html();
			$(this).parents("ul").hide().prev("strong").find("span").html(html);
		});
    });
	
});

//tab 切换
$(".ind_rec_list").slide({ titCell:".titles li", mainCell:".contents",delayTime:0 });

//tab 切换
$(".bd_user_main .user_info").slide({ titCell:".titles li", mainCell:".contents",delayTime:0,trigger:"click"});

//首页排行
$(".ind_product_star li").mouseover(function(){
	$(this).siblings().removeClass("current");
	$(this).addClass("current");
});

//选择配送城市
$("#js_select_city h4").click(function(){
	if($(this).next("ul").is(":hidden")){
		$(this).next("ul").show();
		$(this).parents("#js_select_city").css("position","relative");
	} else {
		$(this).next("ul").hide();
		$(this).parents("#js_select_city").css("position","");
	}
});
$("#js_select_city li a").click(function(){
	var html = $(this).html();
	$("#js_select_city h4 span").html(html);
	$("#js_select_city ul").hide();
});

//首页banner
	jQuery("#js_banner").slide({titCell:".click ul",mainCell:".list ul",autoPage:true,autoPlay:true,vis:1});
