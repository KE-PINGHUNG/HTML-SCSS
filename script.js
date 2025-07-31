// 對視窗  做監聽事件            動作為scroll 函數
window.addEventListener("scroll", () =>{
    // 如果視窗中的卷軸Y項目的值不等於0(滑動時)
    if(window.scrollY !=0){
        // 利用queryselector抓取文件中的屬性header中的style的boxshadow的屬性值
        // 設置為0px 3px 5px 1px #929292
        document.querySelector("header").style.boxShadow = "0px 3px 5px 1px #929292";}
    // 如果視窗中的卷軸Y項目的值等於0(靜止或是回到原點時)    
    else{document.querySelector("header").style.boxShadow = "none";
        // boxShadow屬性設置為none沒有

    }
}
);

// 也可以利用變數寫成
// let header = document.querySelector("header")

// window.addEventListener("scroll", () =>{  
//     if(window.scrollY !=0){
//         header.style.boxShadow = "0px 3px 5px 1px #929292";
//     }    
//     else{
//         header.style.boxShadow = "none";
//     }
// }
// );