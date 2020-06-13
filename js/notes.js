jQuery(document).ready(function($){
	// 菜单.menu的a标签高亮
	function toolTipInit() {
		$('.menu li a').tooltip({
			placement: 'right'
		});
	}
	toolTipInit();
	//游记二#Grid  JQuery过滤器MixItUp
	$('#Grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });
	//引用jQuery弹出层插件lightbox
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});
	//根据主菜单的a标签打开不同的游记页面
	$(".main_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		// 游记二的.content
		$("#menu-container .content").hide();
		// 菜单1-5
		$("#menu-container #menu-"+id[1]).slideDown(600);
		// 游记一的.homepage
		$("#menu-container .homepage").hide();
		return false;
	});
   // 当点击主菜单的a.homebutton时，游记一的内容默认显示
	$(".main_menu a.homebutton").click(function(){
		$("#menu-container .homepage").show();
		return false;
	});
	// 游记二的图片过滤菜单
	$('.menu-toggle-btn').click(function(){
        $('.responsive_menu').stop(true,true).slideToggle();
    });

    $(".responsive_menu a").click(function(){
        	$('.responsive_menu').hide();
        });

	// 游记二的图片过滤
    $(".toggle-filter").click(function(){
		$(".filter-controls").slideToggle();
		return false;
	});
});