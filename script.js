function removethis(id){
    var element = document.querySelector(id);
    element.remove();
    var fdrequest = document.querySelector("#number");
    var newtext = parseInt(fdrequest.innerText)-1;
    fdrequest.innerText = newtext;
}
// function removethistoo(){
//     var element = document.querySelector("#removephil");
//     element.remove();
// }
function changethename(){
    var element = document.querySelector("#janedoe");
    var profilepic = document.querySelector("#janejane");
    element.innerText = "THE WENDI";
    profilepic.src = "images/thewendi.png";

}
