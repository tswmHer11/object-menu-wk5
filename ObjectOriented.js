class Upgrades {
    constructor(accessory){
        this.accessory = accessory;
    }
}

class Vehicle {
    constructor(make, modelTrim) {
        this.make = make;
        this.modelTrim = modelTrim;
        this.accessories = [];
    }

    addUpgrades(accessory) {
        if (accessory instanceof Upgrades) {
            this.accessories.push(accessory);
        } else {
            throw new Error(`You can only add an instance of Upgrades. Argument is not an Upgrade: ${accessory} `);
        }
    }    
}

class Menu {
    constructor() {
        this.vehicleMakeModel = [];
        this.vehicleAccessory = [];
        this.selectedVehicle = null;
        
    }
    
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPackage();
                    break;
                case '2':
                    this.viewVehiclePackages();
                    break;
                case '3':
                    this.deletePackage();
                    break;
                default:
                    selection = 0;    
            }
            
            selection = this.showMainMenuOptions();
        }
        
        alert('See you next time, Goodbye!');
    }
    
    showMainMenuOptions() {
        return prompt(`
        0) EXIT
        1) Create New Vehicle Package
        2) View Vehicle Packages
        3) Delete Packages
        `);
    }
    
    createPackage() {
        let makeModel = "";
            
        makeModel = new Vehicle(
                prompt('Please enter a Vehicle Make. '),
                prompt('Please enter the Vehicle Model. ')
                );
       
            this.vehicleMakeModel.push(makeModel);
        }
       
    deletePackage() {
        let vehiclePackageString = '';
        for (let i = 0; i < this.vehicleMakeModel.length; i++) {
            vehiclePackageString += (i+1) + ') ' + this.vehicleMakeModel[i].make + ' ' 
             + this.vehicleMakeModel[i].modelTrim + ' Package' + '\n';
        }

        let index = prompt('Please select the package you wish to delete. \n' + vehiclePackageString);
        this.vehicleMakeModel.splice((index-1),1);
        
        console.log('vehicle in deletepackage' ,vehiclePackageString);
    }
 
    viewVehiclePackages() {
        let vehiclePackageString = '';
        for (let i = 0; i < this.vehicleMakeModel.length; i++) {
            vehiclePackageString += (i+1) + ') ' + this.vehicleMakeModel[i].make + ' ' 
             + this.vehicleMakeModel[i].modelTrim + ' Package' + '\n';
        }
        let index = prompt(`Enter the index of the vehicle package you wish to view: \n 
        ---------------------- \n` + vehiclePackageString);
        if (index > -1 && (index - 1) < this.vehicleMakeModel.length) {
            this.selectedVehicle = this.vehicleMakeModel[index - 1];
           this.showVehicleMenuOptions();
        }       
    }

    showVehicleMenuOptions() {
        let selection = 
            this.selectedVehicle && prompt(`
                Currently viewing: ${this.selectedVehicle.make + ' ' + this.selectedVehicle.modelTrim} 

                0) EXIT
                1) Add accessories/upgrades
                2) Delete accessories/upgrades
                3) Display vehicle accessories/upgrades
            `);
            
            switch (selection) {
                case '1':
                    this.addAccessory();                        
                    break;
                case '2':
                    this.deleteAccessory();
                    break;
                case '3':
                    this.displayAccessoryUpgrades();
                    break;
                default: 
                    selection = 0;
            }   
    }

    addAccessory() {
        while (this.selectedVehicle.accessories.length < 10){
            let accessory = prompt('What Accessory/Upgrade would you like to add? (Max 10) or Enter "n" to stop.');
                if (accessory == 'n' || accessory.length < 1){
                    this.showVehicleMenuOptions();
                    break;
                } 
            
                this.selectedVehicle.addUpgrades(new Upgrades(accessory));
            }
        
        if (this.selectedVehicle.accessories.length == 10) {
            alert ('Limit of 10 accessories reached. Hit enter to exit.');
        }
    }

    deleteAccessory() {
        let displayAU = '';
        for (let i = 0; i < this.selectedVehicle.accessories.length; i++) {
            displayAU += (i+1) + ' ) ' + this.selectedVehicle.accessories[i].accessory + "\n";
        }   
        let index = prompt('Please select the accessory/upgrade you wish to delete. \n' + displayAU);
        this.selectedVehicle.accessories.splice((index-1),1);
        this.showVehicleMenuOptions();
    }
     
    displayAccessoryUpgrades() {
        let displayAU = '';
        for (let i = 0; i < this.selectedVehicle.accessories.length; i++) {
            displayAU += (i+1) + ' ) ' + this.selectedVehicle.accessories[i].accessory + "\n";
        }   
        
        alert (`Here are your ${this.selectedVehicle.make + " " + this.selectedVehicle.modelTrim} accessories and upgrades: \n`
         + displayAU);

        this.showVehicleMenuOptions();
    }
}

let menu = new Menu();
menu.start();