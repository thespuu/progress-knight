function linkEventHandlersToHTMLElements() {
    //alert("script imported successfully yeet");
    let woodenHutButton = document.getElementById("button-woodenHut");

    woodenHutButton.addEventListener("click", handleWoodenHutClick);
}

/*
What do I need to do in order to handle this click?
I need to grab the building object associated with Wooden Hut from 
some collection of building objects. Which means I need some collection of building objects.
*/
function handleWoodenHutClick() {
    alert("click!");
}