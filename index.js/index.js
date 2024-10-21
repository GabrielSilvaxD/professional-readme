import colors from 'colors';

const teslaModels = ['Model S', 'Model 3', 'Model X', 'Model Y', 'Cybertruck'];

const userInput = process.argv[2];

const checkCarModel = (model) => {
    if (teslaModels.includes(model)) {
        console.log(`Vehicle is available: ${model}`.bold.green); 
        if (model === 'Model Y') {
            console.log(model.red); 
        } else if (model === 'Model 3') {
            console.log(model.yellow); 
        } else if (model === 'Model X') {
            console.log(model.blue); 
        } else if (model === 'Model S') {
            console.log(model.green); 
        } else if (model === 'Cybertruck') {
            console.log(model.grey); 
        }
    } else {
        console.log('We dont have this car in inventory.'.bold.red); 
    }
};

checkCarModel(userInput);