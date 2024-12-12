window.addEventListener("load",function(){
    let tabs = this.document.querySelectorAll(".tabs>a")
    let tabs_title = this.document.querySelectorAll(".tabs_title>div")
    let list = this.document.querySelectorAll(".products>ul")

    tabs.forEach(function(tab,index){
        tab.addEventListener("click",function(){

            tabs[0].classList.remove("on")
            tabs[1].classList.remove("on")
            tabs[index].classList.add("on")

            tabs_title[0].classList.remove("on")
            tabs_title[1].classList.remove("on")
            tabs_title[index].classList.add("on")

            // 탭내용 변경
            // list[0].classList.remove("on") // notice ul
            // list[1].classList.remove("on") // gallery ul
            // list[index].classList.add("on") // 클릭한 a태그의 순번에 맞는 ul태그
        })
    })

})