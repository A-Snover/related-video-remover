function saveOptions(e) {

    e.preventDefault();

    browser.storage.local.set({
        blockRelated: document.querySelector("#blockRelated").value,
        blockComments: document.querySelector("#blockComments").value
    });

}

function restoreOptions() {

    function setCurrentChoice(result) {
        document.querySelector("#blockRelated").value = result.blockRelated;
        document.querySelector("#blockComments").value = result.blockComments;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var gettingBlockRelated = browser.storage.local.get("blockRelated");
    var gettingBlockComments = browser.storage.local.get("blockComments");

    gettingBlockRelated.then(setCurrentChoice, onError);
    gettingBlockComments.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
