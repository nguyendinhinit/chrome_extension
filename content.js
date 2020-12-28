console.log("content is running");
// var postContent = [];
// var commentContent = [];
function scrollDown(){
    window.scrollBy(0, 10000);
}
function getPost() {
    console.log("getPost running")
    postContent = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q");
    console.log(postContent.length," bài post lấy được");
    for (let post of postContent) {
        console.log(post.textContent);
    }
}
function getComment(){
    console.log("getComment running")
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(comments.length," số comment");
    for(var i = 0; i < comments.length; i++) {
        // Only if there is only single class
        if(comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            // Do something with the element e[i]
            console.log(commentContent[i].textContent)
        }
    }
    // for (let comment of commentContent) {
    //     console.log(comment.textContent);
    // }
}function getUser(){
    console.log("getUser running")
    users = document.getElementsByClassName("pq6dq46d");
    console.log(users.length," người comment số bài viết của bạn");
    for(var i = 0; i < users.length; i++) {
        // Only if there is only single class
        if(users[i].className == 'pq6dq46d') {
            // Do something with the element e[i]
            console.log(users[i].textContent)
        }
    }
    // for (let user of users) {
    //     console.log(user.textContent);
    // }
}
function getUserAndComment(){
    console.log("getUserandComment running")
    users = document.getElementsByClassName("pq6dq46d");
    comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
    console.log(users.length, comments.length)
    console.log(postContent.length);
    for(var i = 0; i < users.length; i++) {
        // Only if there is only single class
        if(users[i].className == 'pq6dq46d' && comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
            // Do something with the element e[i]
            console.log(users[i].textContent,": ",commentContent[i].textContent)
        }
    }
}
window.setTimeout(scrollDown,5000);
window.setTimeout(getPost, 10000);
window.setTimeout(getComment, 15000);
window.setTimeout(getUser, 15000);
window.setTimeout(getUserAndComment,15000);
// for (let post of postContent) {
//     console.log(post.textContent);
// }
// for (let comment of commentContent) {
//     console.log(comment.textContent);
// }

// Bắt comment



// kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql ii04i59q -> id bắt bài post
// document.querySelectorAll('[class^="d2edcug0"]'); -> bắt seemore
// kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql -> id bắt comment
