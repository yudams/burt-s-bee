document.addEventListener("DOMContentLoaded", function () {
    const favoriteIcons = document.querySelectorAll(".favorite img");

    favoriteIcons.forEach((icon) => {
        let isFilled = false;

        icon.addEventListener("click", function (e) {
            e.preventDefault(); // 클릭 시 부모 요소의 기본 동작 방지
            isFilled = !isFilled;

            // 상태에 따라 아이콘 변경
            icon.src = isFilled 
                ? "./images/favorite_filled.svg" 
                : "./images/favorite.svg";

            // 애니메이션 효과
            icon.classList.add("scale");
            setTimeout(() => icon.classList.remove("scale"), 200);
        });
    });


    // 부모 요소인 body에 이벤트 리스너 추가 (이벤트 위임 방식)
    document.body.addEventListener("click", function (e) {
        const target = e.target;

        // 클릭된 요소가 .favorite 클래스의 자식이고 IMG인지 확인
        if (target.tagName === "IMG" && target.closest(".favorite")) {
            e.preventDefault(); // 기본 동작 방지

            // 현재 이미지 src 확인 (경로를 분리해서 파일명만 비교)
            const currentSrc = target.src.split('/').pop(); // 파일명만 추출
            const isFilled = currentSrc === "favorite_filled.svg";

            // 상태 전환 (이미지 변경)
            target.src = isFilled
                ? "./images/favorite.svg"
                : "./images/favorite_filled.svg";

            // 애니메이션 효과 (스케일)
            target.classList.add("scale");
            setTimeout(() => target.classList.remove("scale"), 200);
        }
    });

   
   
});
// document.addEventListener("DOMContentLoaded", function () {
//     // 상위 요소를 선택
//     const productList = document.querySelector(".products");

//     // 상위 요소에 이벤트 위임
//     productList.addEventListener("click", function (e) {
//         // 클릭된 요소가 .favorite 클래스의 자식이면서 IMG 태그인지 확인
//         const target = e.target;

//         // IMG가 아닌 다른 요소에서 클릭한 경우 제외
//         if (target.tagName === "IMG" && target.closest(".favorite")) {
//             // 디버깅: 콘솔에 클릭된 하트 확인
//             console.log("클릭된 하트 이미지: ", target.src);

//             // 하트 상태를 변경
//             const isFavorite = target.src.includes("favorite.svg");
//             if (isFavorite) {
//                 target.src = "./images/favorite_filled.svg"; // 꽉 찬 하트 이미지
//             } else {
//                 target.src = "./images/favorite.svg"; // 빈 하트 이미지
//             }
//         }
//     });
// });
