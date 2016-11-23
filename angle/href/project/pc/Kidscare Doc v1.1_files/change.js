 $(function(){	
      var $head_li = $(".doc-sidebar.col-md-3.pull-right ul li");
       
	  $head_li.click(function(){
       
        $head_li.removeClass("active");
        $(this).addClass("active");
		var changeP = $(this).index();
		$(".docs-section").eq(changeP).show().siblings().hide();
		
	})
});