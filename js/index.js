window.addEventListener("load",function(){

    let header = document.querySelector("header");
    let menuItems = document.querySelectorAll(".gnb > li");
    
    header.addEventListener("mouseenter", function() {
        header.style.height = "7.5rem";  // 헤더에 마우스 오버 시
    });
    
    header.addEventListener("mouseleave", function() {
        header.style.height = "5rem";  // 마우스 아웃 시 기본 높이로 돌아오기
    });
    
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            header.style.height = "30rem";  // 메뉴 항목에 마우스 오버 시 헤더 높이 확장
        });
        item.addEventListener("mouseleave", function() {
            header.style.height = "7.5rem";  // 메뉴 항목에서 마우스 아웃 시 헤더 높이 줄이기
        });
    });
    

    const station1 = new Swiper(".station1", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
          },
        loop:true,
        autoplay: {
            delay: 2000
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
      });

      const station2 = new Swiper(".station2",{
        // loop:true,
        autoplay:true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        speed: 1000,
    });

    // station1.on('slideChange',function(){
    //     // console.log(station3.realIndex)
    //     station2.slideToLoop(station1.realIndex)
    // });

})