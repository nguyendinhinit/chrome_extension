console.log("content is running");
// var posts = [];
// var comments = [];
// var users = [];
// var seemores = [];
// var loadcomment = [];
// var scroll = 3000;
// function scrollDown() {
//     window.scrollBy(0, 10000);
// }
// function getPost() {
//     console.log("getPost running")
//     posts = document.getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a");
//     console.log(posts.length, " bài post lấy được");
//     for (let post of posts) {
//         console.log(post.textContent);
//     }
// }
// function getComment() {
//     console.log("getComment running")
//     comments = document.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql");
//     console.log(comments.length, " số comment");
//     for (var i = 0; i < comments.length; i++) {
//         if (comments[i].className == 'kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql') {
//             console.log(comments[i].textContent)
//         }
//     }
// } function getUser() {
//     console.log("getUser running")
//     users = document.getElementsByClassName("pq6dq46d");
//     console.log(users.length, " người comment số bài viết của bạn");
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].className == 'pq6dq46d') {
//             console.log(users[i].textContent)
//         }
//     }
// }
// function getUserAndComment() {
//     console.log("getUserandComment running")
//     tmp = document.getElementsByClassName("tw6a2znq sj5x9vvc d1544ag0 cxgpxx05");
//     for (var i = 0; i < tmp.length; i++) {
//         if (tmp[i].className == "tw6a2znq sj5x9vvc d1544ag0 cxgpxx05") {
//             if (tmp[i].children.length > 1)
//                 console.log(tmp[i].children[0].textContent, ": ", tmp[i].children[1].textContent);
//         }
//     }
// }
// function seeMoreComment() {
//     loadcomment = document.getElementsByClassName("gtad4xkn");
//     for (let load of loadcomment) {
//         load.click();
//     }
//     seemore = document.getElementsByClassName("j83agx80 fv0vnmcu hpfvmrgz");
//     for (let btn of seemore) {
//         if (btn.click()) {
//             btn.click();
//         }
//     }
// }
// function writeToJSON() {
//     // const fs = require('fs');
//     // const path = require('path');

//     // let student = {
//     //     name: 'Mike',
//     //     age: 23,
//     //     gender: 'Male',
//     //     department: 'English',
//     //     car: 'Honda'
//     // };

//     // fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student));
//     var saveData = (function () {
//         var a = document.createElement("a");
//         document.body.appendChild(a);
//         a.style = "display: none";
//         return function (data, fileName) {
//             var json = JSON.stringify(data),
//                 blob = new Blob([json], { type: "octet/stream" }),
//                 url = window.URL.createObjectURL(blob);
//             a.href = url;
//             a.download = fileName;
//             a.click();
//             window.URL.revokeObjectURL(url);
//         };
//     }());

//     var data = { x: 42, s: "hello, world", d: new Date() },
//         fileName = "my-download.json";

//     saveData(data, fileName);
// }
// writeToJSON();
// function main() {
//     console.log("enter main")
//     // window.setTimeout(scrollDown, 5000);
//     getPost();
//     seeMoreComment();
//     // window.setTimeout(getComment, 15000);
//     // window.setTimeout(getUser, 15000);
//     getUserAndComment();
// }
// window.setTimeout(scrollEvent, 5000);
// window.addEventListener('wheel', function () {
//     if(window.scrollY > scroll){
//         scroll+=3000;
//         console.log(scroll);
//         main();
//     }
// });
var containers = [];
var usersContainer = [];
var postsContainer = [];
var users = [];
var posts = [];
//Lấy phần khung chứa 1 bài post
function getContainers() {
    var posts = document.getElementsByClassName("j83agx80 cbu4d94t");
    for (let item of posts) {
        if (item.className == "j83agx80 cbu4d94t") {
            containers.push(item);
        }
    }
    // console.log(postContainer.length);
    for (var i = 0; i < containers.length; i++) {
        console.log(containers[i].textContent);
    }
}

function getUserContainer() {
    for (var i = 0; i < containers.length; i++) {
        usersContainer.push(containers[i].getElementsByClassName("buofh1pr")[0]);
    }
    console.log(users.length);
}

function getUser() {
    for (var i = 0; i < usersContainer.length; i++) {
        users.push(usersContainer[i].getElementsByClassName("nc684nl6")[0]);
    }
    for (var i = 0; i < usersContainer.length; i++) {
        console.log(users[i].textContent)
    }
}
function getPostsContent() {
    for (var i = 0; i < containers.length; i++) {
        if (containers[i].getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a")[0] == undefined) {
            postsContainer.push(containers[i].getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql")[0]);
        }else{
            postsContainer.push(containers[i].getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a")[0]);
        }
    }
    for (var i = 0; i < postsContainer.length; i++) {
        console.log(postsContainer[i].textContent);
    }
}
function convertJSON(){
    for(var i = 0 ; i< postsContainer.length; i++){
        console.log(users[i].textContent,": ",postsContainer[i].textContent);
    }
}
window.setTimeout(getContainers, 10000);
window.setTimeout(getPostsContent, 15000);
window.setTimeout(getUserContainer, 15000);
window.setTimeout(getUser, 17000);
window.setTimeout(convertJSON,20000);