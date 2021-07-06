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
    //alert("click!");
    //grab a reference to the object associated with the HTML element we clicked
    var woodenHutObject = townData.buildingObjects["Wooden Hut"]; // returns TownBuilding object

    //if player has more money in the townFund than it costs to build another building, do stuff
    if(gameData.townFunds >= woodenHutObject.calculateCostOfNextBuilding()) {
        console.log("You can afford it");
        gameData.townFunds -= woodenHutObject.calculateCostOfNextBuilding();
        woodenHutObject.currentActiveBuildings++;
        townData.townPopCapacity += woodenHutObject.popCapacity;
        console.log("Current active huts: " + woodenHutObject.currentActiveBuildings);
    } else {
        console.log("Town fund: " + gameData.townFunds);
        console.log("Cost: " + woodenHutObject.calculateCostOfNextBuilding());
        console.log("You cant afford it");
    }
}