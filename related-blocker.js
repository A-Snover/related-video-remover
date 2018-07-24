window.onmousemove = function () {

    var removeIDs = ["related", "comments"];
    var removeListLen = removeIDs.length;

    //Removing all sections of the watch page that have been marked for removal.
    for (i = 0; i < removeListLen; i++) {

        document.getElementById(removeIDs[i]).remove();

    }

}
