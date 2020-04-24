  /*---------------------------/
 /   loading anime (cover)    /
/---------------------------*/
//変数
let center_mk = document.getElementsByClassName("center_mk")[0];
let over_wrap = document.getElementsByClassName("over_wrap")[0];
//関数
let fade_in = function(callback,time){
   center_mk.classList.add("fade_in");
   setTimeout(() => {
     callback()
   }, time);
}
let open_cover = function(){
  over_wrap.classList.add("open");
}

window.onload = function(){
  fade_in(open_cover,3000)
}
  /*---------------------------/
 /   hamburger menu
/---------------------------*/
let ham_menu = document.getElementsByClassName("ham_btn")[0];
let nav      = document.getElementsByTagName("nav")[0];

ham_menu.onclick =function(){
  this.classList.toggle("open");
  nav.classList.toggle("open");
}
/* ページ内リンク */

var headerHight = 69;

$(function(){
  $('a[href^=#]').click(function() {
     var speed = 400; // ミリ秒
     var href= $(this).attr("href");
     var target = $(href == "#" || href == "" ? 'html' : href);
     var position = target.offset().top - headerHight;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
      ham_menu.classList.remove("open");
      nav.classList.remove("open");
      return false;
  });
});



