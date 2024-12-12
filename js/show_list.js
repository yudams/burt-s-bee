let sorted = [...product_array].sort((a, b) => new Date(b.pdate) - new Date(a.pdate));
console.log(sorted)
document.querySelector("#btn_sorted_by_date").addEventListener("click",function(e){
    e.preventDefault()
    showlists(sorted)    
})

let ranked = [...product_array].sort((a, b) => b.prank - a.prank);
console.log(ranked)
document.querySelector("#btn_sorted_by_rank").addEventListener("click",function(e){
    e.preventDefault()
    showlists(ranked)    
})


showlists(product_array)
function showlists(array){
    let result_lists = "";
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            result_lists += `
        <li>
            <a href="./product_detail.html?pid=${array[i].pid}">
                <figure>
                    <span class="favorite">
                        <img src="./images/favorite.svg" alt="favorite">
                    </span>
                    <img src="./images/${array[i].pimg_file_name}" alt="${array[i].pname}">
                </figure>
            </a>
            <a href="./product_list_${array[i].pcategory}.html">
                <span class="list_category">${array[i].pcategory}</span>
            </a>
            <a href="./product_detail.html?pid=${array[i].pid}">
                <h3>${array[i].pname}</h3>
            </a>
            <p>${array[i].pdesc}</p>
        </li>
    `
        }
    } else {
        result_lists = "현재 구매 가능한 제품이 없습니다."
    }
    document.querySelector("#new_list").innerHTML = result_lists
}
