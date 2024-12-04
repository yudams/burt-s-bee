function smoothScrollMove(classname) {
    let gnb = document.querySelector(classname)
    let gnb_li_array = gnb.children

    function getTagTop(tag) {

        // 이 함수는 선택한 태그의 전체 문서 기준. 위에서 얼마나 떨어져 있는지를 계산하여 픽셀값으로 리턴하는 함수.
        return tag.getBoundingClientRect().top + window.scrollY

        // 앞에서 선택한 태그 화면을 기준으로 화면에서 떨어진 거리를 계산하는 메서드?
        // getBoundingClientRect() 함수는 선택한 태그의 뷰포트(화면)의 상단에서, 선택한 태그 상단까지의 거리를 리턴.
    }

    for (let i = 0; i < gnb_li_array.length; i++) {
        gnb_li_array[i].addEventListener("click", function (e) {
            let selector = gnb_li_array[i].children[0].getAttribute("href")
            e.preventDefault()
            // 태그 본연의 기본 기능 억제 (a태그를 클릭했을 때 새로고침되는 것을 억제함)
            window.scrollTo({
                // 헤더가 fixed인 경우에는 헤더의 높이를 빼야 가려지지 않는다
                top: getTagTop(document.querySelector(selector)), //- 100,
                behavior: "smooth"
            })
        })
    }
}


// 1. 이 함수를 사용하기 위해서는 ((ul태그의 자식) li의 자식)a태그를 만든 후, ul태그에게 클래스명을 설정한다.
// 2. 부드럽게 이동하고자 하는 목적지 태그에는 id를 설정하고, a태그의 href에는 목적지의 id를 #idname과 같이 입력한다.
// <a href="classname">

// <ul class="tag">
//     <li><a href="classname"> TEXT </a></li> 
// </ul>
// 사용 예는 smoothScrollMove(".classname")
