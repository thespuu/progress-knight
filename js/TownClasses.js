/*
    Author: Cameron Gott

*/

class TownBuilding {
    /*
    *   buildingData is expected to be an object of key-value pairs
    *   consisting of attribute name and attribute value. Eg:
    *   "buildingName": "Wooden Hut"
    */
    constructor(buildingData) {
        this.popCapacity = buildingData.popCapacity;
        this.buildingName = buildingData.buildingName;
        this.baseCost = buildingData.baseCost;
        this.costGrowthFactor = buildingData.costGrowthFactor;
        this.currentActiveBuildings = buildingData.currentActiveBuildings;
        this.incomePerBuilding = buildingData.incomePerBuilding;
        this.tooltipText = buildingData.tooltipText;
        this.splendorPerBuilding = buildingData.splendorPerBuilding;
        this.isUnlocked = buildingData.isUnlocked;
        this.requirementsList = buildingData.requirementsList;
        this.buildingCategory = buildingData.buildingCategory;
    }

    purchaseBuilding() {
        gameData.coins -= this.baseCost;
        this.currentActiveBuildings++;
        
    }
    
}