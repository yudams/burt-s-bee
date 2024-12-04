window.addEventListener("load",function(){
    let flag = false
    let flag2 = false

    window.addEventListener("scroll", function () {
        flag = setAnimationToTag(flag)
        flag2 = setAnimationToTagVer(flag2)
    })

    smoothScrollMove(".story_list")
})