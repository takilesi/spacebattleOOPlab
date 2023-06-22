// let cat = document.getElementById(letterNumber).innerHTML = fixQ();

// america Object  
let america = {
    name: "america", 
    hull: 20,
    firepower: 5, 
    accuracy: 7 
}
// aliens Object 
let aliens = {
    name: "aliens",  
    hull: getRandomInt(3,6), 
    firepower: getRandomInt(2,4),
    accuracy: getRandomInt(6,8)
}

// generate random numbers 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// pass in "america", or "aliens"
const doesShotHit = (alienOrAmerica) => {
    let shotAccuracy = getRandomInt(1, 10)
    if (shotAccuracy <= alienOrAmerica.accuracy){
        return true 
    } else {
        return false 
    }
}

// const hullDamageReport = () => {

// }

// const shipDestroyed = () => {
//     doesShotHit()
//     hullDamageReport()
// }

// const alienAttack = () => {
//     // T or F ?  
//     let hit = doesShotHit("aliens")
    
//     pointsLost = aliens.firepower

//     document.querySelector(".rightFirepower").innerHTML = "Firepower: " + pointsLost

//     if (hit == true) {
//         america.hull -= pointsLost 

//         document.querySelector(".leftHull").innerHTML = "Hull breach, Points lost: " + pointsLost + "Updated hull integrity: " + america.hull; 


//     } else {
//         document.querySelector(".leftHull").innerHTML = "Hull : " + america.hull; 
//     }
// }

const attack = (alienOrAmerica) => {
    // T or F ?
    let hit = doesShotHit("alienOrAmerica")
     
    document.querySelector(".leftDisplayBox").innerHTML = "Alien Destroyed: " + hit;  
   
    if (hit == false) {
        document.getElementById("alienBut").innerHTML = "Alien attack imminent"
        
        setTimeout(() => {
            document.getElementById("alienBut").innerHTML = "President, you hava a decision to make!"
            alienAttack()
        }, "3000"); 
    }
    

    // document.querySelector(".leftHull").innerHTML = "Hull: " + america.hull;  
   

    // document.querySelector(".leftFirepower").innerHTML = "Firepower: " + america.firepower;  
   

    // document.querySelector(".leftAccuracy").innerHTML = "Accuracy (out of 10): " + america.accuracy;  
    
}






// const updateAlienStats = () => {
 
//     document.querySelector(".rightDisplayBox").innerHTML = "Alein's score: " + alienScore;  
//     // alienScore -= 10; 
 
//     document.querySelector(".rightHull").innerHTML = "Hull: " + aliens.hull;  
//     // aliens.hull -= 10; 
 
//     document.querySelector(".rightFirepower").innerHTML = "Firepower: " + aliens.firepower;  
//     // aliens.firepower -= 10; 

//     document.querySelector(".rightAccuracy").innerHTML = "Accuracy (out of 10): " + aliens.accuracy;  
//     alienScore -= 10; 
// }

console.log(america.name); 
console.log(america.hull); 
console.log(america.firepower); 
console.log(america.accuracy); 

console.log(aliens.name); 
console.log(aliens.hull); 
console.log(aliens.firepower); 
console.log(aliens.accuracy); 








// const attack = (americaOrAlien) => {
//     // T or F ?
//     let hit = doesShotHit("americaOrAlien")
     
//     document.querySelector(".leftDisplayBox").innerHTML = "Alien Destroyed: " + hit;  
   
//     if (hit == false) {
//         document.getElementById("alienBut").innerHTML = "Alien attack imminent"
        
//         setTimeout(() => {
//             document.getElementById("alienBut").innerHTML = "President, you hava a decision to make!"
//             alienAttack()
//         }, "3000"); 
//     }
    


    
// }