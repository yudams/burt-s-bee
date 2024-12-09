window.addEventListener("load", function () {

    let header = document.querySelector("header");
    let menuItems = document.querySelectorAll(".gnb > li");

    header.addEventListener("mouseenter", function () {
        header.style.height = "7.5rem";  // 헤더에 마우스 오버 시
    });

    header.addEventListener("mouseleave", function () {
        header.style.height = "5rem";  // 마우스 아웃 시 기본 높이로 돌아오기
    });

    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            header.style.height = "30rem";  // 메뉴 항목에 마우스 오버 시 헤더 높이 확장
        });
        item.addEventListener("mouseleave", function () {
            header.style.height = "7.5rem";  // 메뉴 항목에서 마우스 아웃 시 헤더 높이 줄이기
        });
    });

    let btn_gnb_open = this.document.querySelector(".btn_gnb_open")
    let arrow = this.document.querySelector(".btn_gnb_open>img")
    let mo_gnb = this.document.querySelector(".mo_gnb")

    btn_gnb_open.addEventListener("click", function () {
        // arrow.style.transform = "rotate(0deg)";
        mo_gnb.classList.toggle('on');
        arrow.classList.toggle('rotate');
    })

    const station1 = new Swiper(".station1", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
        loop: true,
        autoplay: {
            delay: 2000
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
    });

    const station2 = new Swiper(".station2", {
        // loop:true,
        autoplay: true,
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

    var swiper = new Swiper(".best_seller", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,


        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            501:{
                slidesPerView:2,
                spaceBetween: 18,
            },
            768:{
                slidesPerView:3,
                spaceBetween: 18,
            },
            1024:{
                slidesPerView:4,
                spaceBetween: 14,
            }
        }
      });

})