console.log("Script Load");
(function($){

  $(window).scroll(function(){

    var curr = $(this).scrollTop();
    var target = $('.main_area').offset().top;
    if(curr >= target + ($('.header_area').height()/2)){
      $(".header_area").addClass('on')
    } 
    
})
$(window).trigger('scroll')


  const $meun = $(".meun_area");
  const $meunBg = $(".meun_bg");
  const $meunCt = $(".meun_ct");
  
$(".link_meun").click(function(e){
  e.preventDefault();

  if($meun.hasClass('off')){
    $meun.addClass('on').removeClass('off')
    $meun.css('opacity','1')
    $meunBg.addClass('on')
    $meunCt.addClass('on')

    $(".ic_meun").addClass('on');
  }else if($meun.hasClass('on')){
    $meun.addClass('off').removeClass('on')
    $meun.css('opacity','0')
    $meunBg.removeClass('on')
    $meunCt.removeClass('on')

    $(".ic_meun").removeClass('on');

  }
});

gsap.fromTo('.keyline1',0.7,{
  x:'0px',y:'0px',z:'0px'
},{
  scrollTrigger:{
      trigger:'.group_keyword',
      start:"top 100%", 
      end:"bottom top",
      // markers:true,
      scrub:1,
  },
  x:'-280px',y:'0px',z:'0px'
})

gsap.fromTo('.keyline2',0.7,{
  x:'-52px',y:'0px',z:'0px'
},{
  scrollTrigger:{
      trigger:'.group_keyword',
      start:"top 100%", 
      end:"bottom top",
      // markers:true,
      scrub:1,
  },
  x:'0px',y:'0px',z:'0px'
})
gsap.fromTo('.keyline3',0.7,{
  x:'0px',y:'0px',z:'0px'
},{
  scrollTrigger:{
      trigger:'.group_keyword',
      start:"top 100%", 
      end:"bottom top",
      // markers:true,
      scrub:1,
  },
  x:'-126px',y:'0px',z:'0px',
})


//work

// h2Width =  $('.sc_work h2').outerWidth();
// listWidth =  $('.sc_work .work_list').outerWidth();
// alert(listWidth)

gsap.to('.work_ct',{
  
scrollTrigger:{
  trigger:".sc_work",
  start:"top top",
  end:"bottom top",
  scrub :1,
  markers:true,
  pin:true,//pin 모션 고정 
 // end:"+=500% ", sc_work스크롤의 5배 - 너무 빠른 경우
},

  xPercent : -334 + 100 ,//list 총 길리 계산 334 - 화면 값
})


var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  //slidesPerView: 'auto',//기본값은 100% img에 클래스 추가해서 만들기 (% ,vw)
  // spaceBetween: 30,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

// $('.swiper').on('mousedown',function(){
//   $('.swiper img').css({'opacity':'0.5','transform':'scale(0.8)'})
// }).on('mouseup',function(){
//   $('.swiper img').css({'opacity':'1','transform':'scale(1)'})
// })


swiper.on('touchStart',function(){
  gsap.to('.swiper-slide',{scale:0.8,opacity:0.5})
  //after텍스트 클래스 추가 
})
swiper.on('touchEnd',function(){
  gsap.to('.swiper-slide',{scale:1,opacity:1})
})




})(jQuery);