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
    containers = [];
    usersContainer = [];
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
// Lấy nội dung bài viết
function loadPost(index){

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

//------------------------------------END CONTENT---------------------------------//
//------------------------------------GET LINK-----------------------------------//
function getLinkPost(index) {
    temp = index.querySelectorAll('[class = "qzhwtbm6 knvmm38d"]')[1];
    if (temp.querySelectorAll('a[role="link"]')[0] == undefined) return
    else return temp.querySelectorAll('a[role="link"]')[0].getAttribute("href");
}
//------------------------------------END GET LINK-------------------------------//
//Get reaction
function getReaction(index) {
    reactionArray = [];
    if (index.querySelectorAll('[aria-label="See who reacted to this"]')[0] == undefined) {
        return "no reaction";
    }
    else {
        reactionContainer = index.querySelectorAll('[aria-label="See who reacted to this"]')[0];
        reaction = reactionContainer.querySelectorAll('[role="button"]');
        for (var i = 0; i < reaction.length; i++) {
            console.log(reaction[i].getAttribute('aria-label'));
            reactionArray.push(reaction[i].getAttribute('aria-label'));
        }
    }
    var myJsonString = JSON.stringify(reactionArray);
    return myJsonString;

}
//End get reaction

//get comment
function getComment(index) {
    if (index.querySelectorAll('[class = "bp9cbjyn j83agx80 pfnyh3mw p1ueia1e"]')[0] == undefined) return null;
    else {
        temp = index.querySelectorAll('[class = "bp9cbjyn j83agx80 pfnyh3mw p1ueia1e"]')[0].children;
        commentAndShare = [];
        for (let item of temp) {
            commentAndShare.push(item.textContent);
        }
        return { "comment": commentAndShare[0], "share": commentAndShare[1] };
    }
}
//end get comment


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
//export to json
var postid = 0;
var jsonObject = [];
function exportToJsonFile(jsonData) {
    jsonObject = [];
    console.log('runnig');
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    let exportFileDefaultName = 'data.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    console.log('end export')
}
function main() {
    jsonObject = [];
    getContainers();
    for (var i = 0; i < containers.length; i++) {
        console.log({ "postid": i, "poster": getUser(usersContainer[i]), "postContent": getPostsContent(containers[i]) });
        jsonObject.push({ "postid": i, "poster": getUser(usersContainer[i]), "postContent": getPostsContent(containers[i]), "linkPost": getLinkPost(containers[i]), "reaction": { "react": getReaction(containers[i]) }, "Interactive": getComment(containers[i]) });
        console.log('run1st')
    }
    // if (containers.length > 100) {
    console.log(jsonObject.length);
    exportToJsonFile(jsonObject);
    // }
}

//------------------------END LOAD COMMENT------------------------//
//work flow -> lay toan bo cac bai post vao container.
// window.setTimeout(main,10000);
//scroll event
window.addEventListener("click", main);
//end scroll event
