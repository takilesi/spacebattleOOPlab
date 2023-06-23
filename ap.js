// working code 


// america Object  
let america = {
    name: "america", 
    hull: 20,
    firepower: 5, 
    accuracy: 7 
}
// aliens Object 
let alien = {
    name: "alien",  
    hull: getRandomInt(2,6), 
    firepower: getRandomInt(2,4),
    accuracy: getRandomInt(4,8),
    hoardCount: 6
}
// generate random numbers 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const doesShotHit = () => {
    oneInTen = getRandomInt(1,10); 
    return oneInTen; 
}

// while (alien.hoardCount > 0 || america.hull > 0){
    const alienAttack = () => {
        if (america.hull > 0){
            let shotPercent = doesShotHit()
            let isHit = new Boolean()
            alienAccuracy = alien.accuracy 
            console.log("Alien shot suceeded?  (sucess range: 1-" + alienAccuracy + ")  Value: " + shotPercent)
            if ( shotPercent <= alienAccuracy) {
                isHit = true
            } else {
                isHit = false 
            }
            console.log("  " + isHit); 
            console.log(""); 

            // hull check 
            alienFirepower = alien.firepower
            if (isHit == true) {
                console.log("HULL REPORT"); 
                if (america.hull <= alienFirepower) {
                    console.log("America Destroyed, americaHull: " + america.hull + " is less than Alien firepower: " + alienFirepower); 
                    console.log("America destroyed"); 
                } else {
                    america.hull -= alienFirepower
                    console.log("America damaged, americaHull hit with Alien firepower: " + alienFirepower + " New Hull value = " + america.hull); 
                    console.log(""); 
                }
            }
            americaAttack()
        } else {
            console.log("Game Over");  
        }
    }

    const americaAttack = () => {
        if (alien.hoardCount > 0){
            let shotPercent = doesShotHit()
            let isHit = new Boolean()
            console.log("America shot suceeded?  (sucess range: 1-7)  Value: " + shotPercent)
            if ( shotPercent <= america.accuracy) {
                isHit = true
            } else {
                isHit = false 
            }
            console.log("  " + isHit);
            console.log("");  

            // hull check 
            alienFirepower = alien.firepower
            alienHull = alien.hull
            if (isHit == true) {
                console.log("HULL REPORT"); 
                if (alienHull <= america.firepower) {
                    console.log("Alien Destroyed, alienHull: " + alienHull + " is less than or equal to American firepower: " + america.firepower); 
                    alien.hoardCount -= 1
                    console.log("New Hoard Count= " + alien.hoardCount)


                    let readline = require('readline');   // Import the readline module

                    let rl = readline.createInterface({    // Create readline interface
                    input: process.stdin,
                    output: process.stdout,
                    });

                    // Ask a question and wait for user input
                    rl.question('Take another shot? ', (answer) => {

                        // Handle the user input
                        if (answer == "y"){
                            americaAttack()
                        } else {
                            console.log("Game Over"); 
                        }
                    
                        // Close the readline interface
                        rl.close();
                    });
                    


                }
            } else {
                alienAttack(); 
            }
        }  else {
            console.log("Game Over"); 
        } 
    
    }
// }


americaAttack() 
console.log(""); 

