// america Object  
let america = {
    name: "america", 
    hull: 20,
    firepower: 5, 
    accuracy: 7 
}
// aliens Object 
let aliens = {
    name: "alien",  
    hull: getRandomInt(3,6), 
    firepower: getRandomInt(2,4),
    accuracy: getRandomInt(6,8),
    hoardCount: 6
}
// generate random numbers 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//while (aliens.hoardCount > 0) {

    // this function returns values, does not call any other functions (except for random...)
    const doesShotHit = (aliensOrAmericans) => {
        let objectAccuracy = aliensOrAmericans.accuracy      // now object accuracy is a 6,7, or 8 for alien and a 7 for america   
        
        let shotAccuracy = getRandomInt(1, 10)  // shot accuracy is 1 to 10 
        
        // console.log(aliensOrAmericans.name + " accuracy is:  " + objectAccuracy);     
        
        if (shotAccuracy <= objectAccuracy){
            console.log("HIT REPORT: " + aliensOrAmericans.name + " accuracy of " + objectAccuracy + " is greater than or equal to " + "enemies shot accuracy of " + shotAccuracy); 
            console.log("  ENEMY HIT"); 

            console.log(""); 
            return [true, shotAccuracy, objectAccuracy]
        } else {
            console.log("HIT REPORT: " + aliensOrAmericans.name + " accuracy of " + objectAccuracy + " is less than " + "enemies shot accuracy of " + shotAccuracy); 
            console.log("  ENEMY MISSED"); 
            console.log(""); 
            return [false, shotAccuracy, objectAccuracy]
        }
    }

    const attack = (alienOrAmerica) => {
        console.log("Shots fired by: " + alienOrAmerica.name ); 
        console.log(""); 
        let isHit = doesShotHit(alienOrAmerica);  // returns 3 paramaters into 'isHit' variable 
                                        // this is funcion call to see if shot is hit or miss 
        if (isHit[0] == true) {
            hullreport(isHit, alienOrAmerica); 
        } else {
    
            attack(aliens) // -----------------------------------------------------
    
        }

    }

    const hullreport = (hit, alienOrAmerica) => {
        console.log("HULL REPORT:");  
        console.log("  shots fired by: " + alienOrAmerica.name); 
    
        if (alienOrAmerica.name == "america") {
            let alienHull = aliens.hull
            let americaHull = america.hull
            if (alienOrAmerica.firepower >= aliens.hull){
                console.log("  AlienHull value: " + alienHull + "   " + alienOrAmerica.name + "'s firepower: " + alienOrAmerica.firepower); 
                console.log("  Alien destroyed!");
                aliens.hoardCount -= 1                           // an alien KILLED
                console.log("  New hoardCount = " + aliens.hoardCount); 
            } else if (alienOrAmerica.firepower >= americaHull) {
                

                console.log(alienOrAmerica + " DESTROYED");  
                
            } else {
                america.hull -= aliens.firepower
                console.log("  americaHull value: " + americaHull + "   " + alienOrAmerica.name + "'s firepower: " + alienOrAmerica.firepower); 
                attack(aliens); // -------------------------------------------------------- 
            }

        } else if (alienOrAmerica.name == "alien"){
            let americanHull = america.hull
            if (alienOrAmerica.firepower >= america.hull){
                console.log("America destroyed!");
            } else { 
                america.hull = america.hull - alienOrAmerica
                console.log()
            }
        }
    }
//}

attack(america);                    // pass a variable here, not a sring 
console.log(""); 


