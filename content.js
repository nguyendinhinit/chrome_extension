console.log("content is running");
var containers = [];
var usersContainer = [];
var postsContainer = [];
var users = [];
var posts = [];
var commentContainer = [];
var commentContent = [];
//---------------------------CONTENT---------------------------//

function getContainers() {
    //Lấy phần khung chứa 1 bài post
    var posts = document.getElementsByClassName("j83agx80 cbu4d94t");
    for (let item of posts) {
        if (item.className == "j83agx80 cbu4d94t") {
            containers.push(item);
        }
    }
    console.log(containers.length, " bài viết lấy được");
    //end
    //lấy khung chứa thông tin người post bài
    for (var i = 0; i < containers.length; i++) {
        usersContainer.push(containers[i].querySelectorAll('[class="buofh1pr"]')[0]);
    }
    console.log(usersContainer.length, " người post bài");
    //end

    console.log(".....Loading Comment Container");
    for (var i = 0; i < containers.length; i++) {
        commentContainer.push(containers[i].getElementsByClassName("stjgntxs ni8dbmo4 l82x9zwi uo3d90p7 h905i5nu monazrh9")[0]);
    }
    console.log("-----Loaded-----")
    for (var i = 0; i < containers.length; i++) {
        commentContent.push(containers[i].getElementsByClassName("cwj9ozl2 tvmbv18p")[0]);
    }
}
function getUser(index) {
    return index.getElementsByClassName("nc684nl6")[0].textContent;
}
function getPostsContent(index) {
    if (index.getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a")[0] == undefined && index.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql")[0] == undefined) {
        return "null";
    } else if (index.getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a")[0] == undefined) {
        return index.getElementsByClassName("kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql")[0].textContent;
    } else {
        return index.getElementsByClassName("ecm0bbzt hv4rvrfc ihqw7lf3 dati1w0a")[0].textContent;
    }
}
function convertJSON() {
    for (var i = 0; i < postsContainer.length; i++) {
        console.log(users[i].textContent, ": ", postsContainer[i].textContent);
    }
}
//------------------------------------END CONTENT---------------------------------//
//------------------------------------GET LINK-----------------------------------//
function getLinkPost(index) {
    temp = index.querySelectorAll('[class = "qzhwtbm6 knvmm38d"]')[1];
    return temp.querySelectorAll('a[role="link"]')[0].getAttribute("href");
}
//------------------------------------END GET LINK-------------------------------//
//Get reaction
function getReaction(index) {
    if (index.querySelectorAll('[aria-label="See who reacted to this"]')[0] == undefined) {
        return "no reaction";
    }
    else {
        reactionContainer = index.querySelectorAll('[aria-label="See who reacted to this"]')[0];
        reaction = reactionContainer.querySelectorAll('[role="button"]');
        for (var i = 0; i < reaction.length; i++) {
            console.log(reaction[i].getAttribute('aria-label'));
        }
    }

}
//End get reaction

//------------------------------------LOAD COMMENT----------------------------------//


function loadMoreComment(commentCon) {
    if (commentCon.getElementsByClassName("j83agx80 fv0vnmcu hpfvmrgz")[0] == undefined) {
        console.log("break loadmorecomment");
        return;
    } else {
        //load more cmt
        commentCon.getElementsByClassName("j83agx80 fv0vnmcu hpfvmrgz")[0].click();
        console.log(".......Comment Loaded")
    }
}
function loadAllComment() {
    for (var i = 0; i < commentContainer.length; i++) {
        loadMoreComment(commentContainer[i]);
    }
}
function getCommentOfPost(conmentCon) {
    tmp = commentCon.querySelectorAll('[class="kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x c1et5uql"]');
    return tmp;
}
var postid = 0;
var jsonObject = [];
function main() {
    getContainers();
    for (var i = 0; i < containers.length; i++) {
        console.log({ "postid": i, "poster": getUser(usersContainer[i]), "postContent": getPostsContent(containers[i]) });
        jsonObject.push({ "postid": i, "poster": getUser(usersContainer[i]), "postContent": getPostsContent(containers[i]), "linkPost": getLinkPost(containers[i]), });
    }
    exportToJsonFile(jsonObject);
}
function exportToJsonFile(jsonData) {
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'data.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}
window.setTimeout(main, 10000);
//------------------------END LOAD COMMENT------------------------//
//work flow -> lay toan bo cac bai post vao container.
