$(function(){
    $('#fullpage').fullpage({
		navigation:'true',
		afterLoad:function( anchorLink,index){//锚链接和索引值
			$('.center > img').removeClass('bian');
			$('.two-left img').removeClass('bian');
			$('.two-left h2').removeClass('bian');
			$('.two-left p').removeClass('bian');
			$('.two-left img').eq(index).addClass('bian');
			$('.two-left h2').eq(index).addClass('bian');
			$('.two-left p').eq(index).addClass('bian');
			$('img.right1').removeClass('right-right');
			$("div.one .bottom1 > #chuan").removeClass('bian');
			if(index==1){
				$('div.one .bottom1 > #chuan').addClass('bian');
			}
			
			$('.two-left img').eq(index-2).addClass('bian');
			$('.two-left h2').eq(index-2).addClass('bian');
			$('.two-left p').eq(index-2).addClass('bian');
			$('img.right1').eq(index-2).addClass('right-right');
			if(index==4){
				$('.center > img').addClass('bian');
			}
			
		}
	});
	$('.yibottom').click(function(){
    	$.fn.fullpage.moveSectionDown();
    })
	$('#uc-login').validate({
				rules:{
					zh:{
						required:true,
					},
					pass: {
						required: true,
					},
//					yzm: {
//						required: true,
//						minlength: 5
//					},
					
				},
				messages:{
					zh:{
						required:'请输用户名',
					},
					pass: {
						required: "请输密码",
					},
//					yzm: {
//						required: "请输验证码",
//						minlength: $.validator.format("密码不能小于{0}个字 符")
//					},
				},
//				errorElement:'label',
//				errorPlacement:function(error,val){
//					error.css({
//					'display':'inlne-block',
//					'color':'red',
//					'font-size':'12px',
//					}).insertAfter(val)
//				},
		})
});