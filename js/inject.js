$(window).scroll(function(e) {

  var scrollSeviye = $(this).scrollTop();
  
  if(scrollSeviye>500){
    scrollSeviye=500;
  }
  
  var buyutme=(scrollSeviye/100)+1;
 
  $('#blur').css('backdrop-filter', 'blur('+scrollSeviye/100+'px)');
  $('#blur').css('-webkit-backdrop-filter', 'blur('+scrollSeviye/100+'px)');
});