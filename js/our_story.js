document.addEventListener("DOMContentLoaded", function () {

  const storyWrap = document.querySelector(".story_wrap");
  const sections = document.querySelectorAll(".story_wrap>section");
  let currentIndex = -1; // 현재 활성화된 섹션의 인덱스
  let isScrolling = false; // 스크롤 중복 방지 플래그

  function scrollToSection(index) {
    if (index < 0 || index >= sections.length || isScrolling) return;
    isScrolling = true;

    sections[index].scrollIntoView({ behavior: "smooth" });
    currentIndex = index;

    // 스크롤 애니메이션 시간 동안 스크롤 방지
    setTimeout(() => {
      isScrolling = false;
    }, 300); // 애니메이션 시간과 동일하게 설정
  }

  storyWrap.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      // 아래로 스크롤
      scrollToSection(currentIndex + 1);
    } else {
      // 위로 스크롤
      scrollToSection(currentIndex - 1);
    }
  });



});
