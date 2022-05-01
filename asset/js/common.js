$(function(){
    
    $('body').mousemove(function(e){
        // xVal = e.clientX;
        // yVal = e.clientY;//clientX,clientY 보이는 화면기준 마우스 클릭 좌표 
        xVal = e.clientX - 25;
        yVal = e.clientY - 25;

        console.log()
        gsap.to('.cursor',{
            x:xVal,
            y:yVal
        })


    })

    $('.group_video').mouseover(function(){
        gsap.to(".cursor",{
            background :"#f00",
            scale:1.2
        })
       //클래스 추가 외 등등 
    })
    $('.group_video').mouseleave(function(){
        gsap.to(".cursor",{
            background :"none",
            scale:1
        })
    })


//    gsap.fromTo('.loading img',1,{
//                             //한 모션당 1초
//        //loading img 전값 모션실행 전
//        opacity:0,
//        rotation:0
//    },{
//        deley:2,
//       rotation:180,
//       opacity:1,
//       stagger:0.1,//객체가 많을 경우. 순차적으로 실행 

//       onComplete:function(){//모션이 완료되고 나서 
//         //   alert
//         $('.loading').addClass('hide');
//       }


//    })


})