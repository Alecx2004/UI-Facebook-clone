let preview = document.querySelector(".preview");

preview.addEventListener("click",()=>{
    let scroll = document.querySelector(".story_content");
   scroll.scrollBy(-250 , 0);
})

let next = document.querySelector(".next");

next.addEventListener("click",()=>{
    let scroll = document.querySelector(".story_content");
   scroll.scrollBy(250 , 0);
})

let media_icon_bar = document.querySelector(".anchor_icon_media");

media_icon_bar.addEventListener("click",()=>{
    let firstContent = document.querySelector(".first_content");
    firstContent.style.display="flex";
    firstContent.style.transfrom="translate(1000)";
})