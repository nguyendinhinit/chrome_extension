console.log("background is running");
window.scrollBy(0, 10000);
function getPost() {
    console.log("getPost running")
    let post = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(post.length);
}
postList = getPost;
for (let post in postList){
    console.log(post.textContent);
}
console.log("kiin")

// Bắt comment



// kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q -> id bắt bài post
// document.querySelectorAll('[class^="d2edcug0"]'); -> bắt seemore
// kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql -> id bắt comment
