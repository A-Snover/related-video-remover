/*window.onmousemove = function () {

    var removeIDs = ["related", "comments"];
    var removeListLen = removeIDs.length;

    //Removing all sections of the watch page that have been marked for removal.
    for (i = 0; i < removeListLen; i++) {

        document.getElementById(removeIDs[i]).remove();

    }

}*/

function onError(error) {
    console.log(`Error: ${error}`);
}

window.onmousemove = function onGot(item) {

    if (item.blockRelated) {
        document.getElementById("related").remove();
    }
    if (item.blockComments) {
        document.getElementById("comments").remove();
    }
}

var gettingBlockRelated = browser.storage.local.get("blockRelated");
var gettingBlockComments = browser.storage.local.get("blockComments");
getting.then(onGot, onError);
