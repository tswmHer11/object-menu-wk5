class Upgrades {
    constructor(accessory){
        this.accessory = accessory;
    }
    describe() {
        let listAccessories = "";
        for (let i = 0; i < this.accessory.length; i++){
            listAccessories += i + ") " + this.accessory.length;
            return `Here are the accessories and upgrades you wish to add: 
            ${listAccessories}`
        }
    }
}
// class Model {
//     constructor(model) {
//         this.model = model;
//         this.accessories = [];
        
//     // }
//     
// }
class Vehicle {
    constructor(make, modelTrim) {
        this.make = make;
        this.modelTrim = modelTrim;
        this.accessories = [];
    }
    // addModel(model) {
    //     if (model instanceof Model) {
    //         this.modelTrim.push(model);
    //     }else {
    //         throw new Error(`You can only add an instance of Models. Argument is not a Model: ${modelTrim} `);
    //     }
    //     // describe() {
    //     //     return `You have chosen a ${this.make}  ${this.modelTrim} and added the following accessories/upgrades: ${this.accessories.length} `;
    //     // }
    // }
    addUpgrades(accessory) {
        if (accessory instanceof Upgrades) {
            this.accessories.push(accessory);
        }else {
            throw new Error(`You can only add an instance of Upgrades. Argument is not an Upgrade: ${accessories} `);
        }
        // describe() {
        //     return `This is the model of your vehicle: ${this.model} `
        // }
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
                case '4':
                    this.displayPackages();
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
        4) Display all Vehicle Packages
        `);
    }
    createPackage() {
        let makeModel = new Vehicle(
            prompt('Enter the Make of the vehicle: '),
            prompt(`What is the Model: `));
        this.vehicleMakeModel.push(makeModel);
        // let addAccessory = prompt('Would you like to add or delete accessories/upgrades? (y/n) ');
        //     if (addAccessory == 'y') {
        //         let selection = this.showVehicleMenuOptions();
        //         while (selection != 0) {
        //             switch (selection) {
        //                 case '1':
        //                     this.addAccessories();
        //                     break;
        //                 case '2':
        //                     this.deleteAccessories();
        //                     break;
        //                 case '3':
        //                     this.displayAccessories();
        //                     break;
        //                 default:
        //                     selection = 0;    
        //             }
        //         }       
        //     }
    //    console.log(this.vehicleMakeModel);

    }
    

    displayPackages() {
        let vehiclePackageString = '';
        for (let i = 0; i < this.vehicleMakeModel.length; i++) {
            vehiclePackageString += i + ') ' + this.vehicleMakeModel[i].make + ' ' + this.vehicleMakeModel[i].modelTrim + ' Package' + '\n';
            
        }
        alert (vehiclePackageString);
    }
    // createPackage() {
    //     let make = prompt('Enter the make of the vehicle: ')
    //     this.vehicleMake.push(new Vehicle(make));
    //     let model = prompt(`What is the model of the ${make}: `)
    //     this.vehicleModel.push(new Model(model));
    //     let selection = prompt(`Would you like to add accessories or upgrades to your ${make} ${model}? (y/n)`)
    //         if (selection == 'y') {
    //         this.creatAccessories();
    //         }else { 
    //             return this.showMainMenuOptions();
    //         }
           
    // }

    
    // createAccessories(){
    //     while (this.vehicleAccessories.length < 5){
    //     let accessory = prompt('Add accessories or upgrades. Type "n" to stop. ');
    //         if (accessory === 'n') {
    //             alert ('End of accessories/upgrades!');
    //             break;
    //         }this.vehicleAccessories.push(new Upgrades(accessory));
    //     }
    //     alert ('End of accessories/upgrades!');
    //     console.log(this.vehicleAccessories);
    // }
 
    viewVehiclePackages() {
        let vehiclePackageString = '';
        for (let i = 0; i < this.vehicleMakeModel.length; i++) {
            vehiclePackageString += i + ') ' + this.vehicleMakeModel[i].make + ' ' + this.vehicleMakeModel[i].modelTrim + ' Package' + '\n';
        }
        let index = prompt(`Enter the index of the vehicle package you wish to view: \n 
        ---------------------- \n` + vehiclePackageString);
        if (index > -1 && index < this.vehicleMakeModel.length) {
            this.selectedVehicle = this.vehicleMakeModel[index];
            let description = 'Vehicle Package: ' + this.selectedVehicle.vehicleMakeModel + '\n';
            
            for (let i = 0; i < this.selectedVehicle.accessories.length; i++){
                description += i + ') ' + this.selectedVehicle.accessories[i].length + '\n';
            } 
            let selection = this.showVehicleMenuOptions(description);
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
    }
    showVehicleMenuOptions() {
        return prompt(`
        0) EXit
        1) Add accessories/upgrades
        2) Delete accessories/upgrades
        3) Display vehicle accessories/upgrades
        `);
    }
    addAccessory() {
        let accessory = '';
        while (accessory != 'n' || this.selectedVehicle.accessories.length != 10){
            let accessory = prompt('What Accessory/Upgrade would you like to add? (Max 10) or Enter "n" to stop.');
            this.selectedVehicle.accessories.push(new Upgrades(accessory));
            if (accessory == 'n'){
                break;
            } 
        }
    }
    displayAccessoryUpgrades() {
        let displayAU = '';
        for (let i = 0; i < this.selectedVehicle.accessories.length; i++) {
            displayAU += i + ') ' + this.selectedVehicle.accessories[i].length;
            // console.log(this.selectedVehicle.accessories[i].length)
        }alert (`Here are your vehicle accessories and upgrades: \n`
         + displayAU);
       
    }
}
let menu = new Menu();
menu.start();