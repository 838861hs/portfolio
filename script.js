/*---------------------------/
 /  　Default variables       /
/---------------------------*/
let flag;
let break_point = 768;
let w_W = window.innerWidth;
let w_h = window.innerHeight;
let w_half = w_h / 2;
let w_tri  = w_h / 3;

/* ハンバーガーボタンの要素と内容取得 */
let ham_menu = document.getElementsByClassName("ham_btn")[0];
let nav = document.getElementsByTagName("nav")[0];

/* headerの画面高さ取得 */
let header = document.getElementsByTagName("header")[0];
let h_h = header.clientHeight;
/* スキル要素の位置取得 */
let skill = document.getElementsByClassName("skill");
let skill_each_pos = [];


/*---------------------------/
 /  window_width device flag  /
/---------------------------*/

function device_disc() {
  if (break_point < w_W) {
    flag = "pc";
  } else {
    flag = "sp";
  }
}
/*---------------------------/
 /   loading anime (cover)    /
/---------------------------*/

//変数
let center_mk = document.getElementsByClassName("center_mk")[0];
let over_wrap = document.getElementsByClassName("over_wrap")[0];
//関数
let fade_in = function (callback, time) {
  center_mk.classList.add("fade_in");
  setTimeout(() => {
    callback();
  }, time);
};
let open_cover = function () {
  over_wrap.classList.add("open");
};

/*---------------------------/
 /   hamburger menu           /
/---------------------------*/

ham_menu.onclick = function () {
  this.classList.toggle("open");
  nav.classList.toggle("open");
};
/* ページ内リンク */
$(function () {
  $("a[href^=#]").click(function () {
    var speed = 400; // ミリ秒
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - h_h;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    ham_menu.classList.remove("open");
    nav.classList.remove("open");
    return false;
  });
});

/*---------------------------/
 /  mask anime
/---------------------------*/

let mask = document.getElementsByClassName("img_mask")[0];
let prof_mask = document.getElementsByClassName("img_mask")[1];
let prof_h =prof_mask.clientHeight;
console.log(prof_h)
let img_mask = function () {
  let isPlay = "isPlay";
  mask.classList.add(isPlay);
};

/*---------------------------/
 /  skill_fade_in
/---------------------------*/

/* 読み込み時に各skill位置を取得し、配列に入れる */
let pos_list = function () {
  for (i = 0; skill.length > i; i++) {
    let pos_value = skill[i].getBoundingClientRect().top;
    skill_each_pos.push(pos_value);
  }
};
pos_list();

/* スクロール量取得 */
window.onscroll = function () {
  let sc_y = window.pageYOffset;
  let tgl_pos = sc_y + w_tri;

   if(sc_y - w_tri > prof_h){
    prof_mask.classList.add("isPlay");
   }

    for(let i=0;skill_each_pos.length > i;i++){
      if(tgl_pos > skill_each_pos[i] && flag=="pc"){
        setTimeout(function(){
          skill[i].classList.add("fade_in");
        },i* 300
        )
      }else if( w_tri + sc_y > skill_each_pos[i] && flag=="sp"){
        skill[i].classList.add("fade_in");
      }
    }


}

/*---------------------------/
 /  load function
/---------------------------*/
window.onload = ()=> {
  fade_in(open_cover,2000);
  setTimeout(img_mask, 3000);
  device_disc();
};

