// index
// 鼠标经过 改变字体颜色
$(function(){
  $(".art_box").mouseenter(function(){
    $(this).children(".article_cont").css("color","#56af08");
  }).mouseleave(function(){
    $(this).children(".article_cont").css("color","#666");
  })
});
// 轮播图、
$(function(){
  // $(".banner img:first").show();
  var m = 1;
  var t = setInterval(imageplay,2000);
  function imageplay(){
    if (m > 3) {
      m = 0;
    }
    controlImg(m);
    controlIcon(m);
    m ++;
  }
  function controlImg(n) {
    $(".banner img").hide().eq(n).show();
  }
  function controlIcon(n) {
    $(".icon span").removeClass("active").eq(n).addClass("active");
  }
  $(".bannerBox").mouseenter(function(){
    clearInterval(t);
    $(".icon span").mouseenter(function(){
      controlImg($(this).index());
      controlIcon($(this).index());
      clearInterval(t);
      m = $(this).index() + 1;
    })
  }).mouseleave(function(){
    t = setInterval(imageplay, 2000);
  })
  $(".iconL").click(function(){
    if (m < 0) {
      m = 3
    }
    m --;
    controlImg(m - 1);
    controlIcon(m - 1);
  })
  $(".iconR").click(function(){
    if (m > 3) {
      m = 0;
    }
    // console.log(m);
    controlImg(m);
    controlIcon(m);
    m ++;
  })
})


//essay
// 鼠标经过放大字体 修改颜色
$(function(){
 $(".cont_leftPad").mouseenter(function(){
   $(this).children(".essayWord").css("color","red");
 }).mouseleave(function(){
   $(this).children(".essayWord").css("color","#555");
 });
});
// $(function(){
//  $(".cont_leftPad").mouseenter(function(){
//    if(!$(this).children(".essayWord").is(":animated")) {
//      $(this).children(".essayWord").animate({
//        fontSize:"16px",
//        color:"red"
//      },300).css("color","red");
//    }
//  }).mouseleave(function(){
//    $(this).children(".essayWord").animate({
//      fontSize:"14px",
//      color:"red"
//    },200).css("color","#555");
//  });
// });
