// test the working ap.js code here 
// connect it to index.html 

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

// push alein.hoardCount value to screen to start game 
document.querySelector(".rightHoardCount").innerHTML = "Hoard Count =  " + alien.hoardCount;

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

const alienAttack = () => {

    if (america.hull > 0){

        let shotPercent = doesShotHit()
        let isHit2 = new Boolean()
        let alienAccuracy = alien.accuracy 
        
        document.querySelector(".rightDisplayBox").innerHTML = "Alien shot suceeded?  (sucess range: 1-" + alienAccuracy + ")  Value: " + shotPercent; 
       
        if ( shotPercent <= alienAccuracy) {
            isHit2 = true
        } else {
            isHit2 = false 
        }
        document.querySelector(".rightDisplayBox").innerHTML += " " + isHit2;

        alienHullCheck(isHit2)
   
        // americaAttack()
    } else {
        gameOver() 
    }
    
}

const alienHullCheck = (isHit2) => {

    let alienFirepower = alien.firepower

    if (isHit2 == true) {

        document.querySelector(".rightHull").innerHTML = "Hull Report: "; 
         
        if (america.hull <= alienFirepower) {

            document.querySelector(".rightHull").innerHTML += "America Destroyed, americaHull: " + america.hull + " is less than Alien firepower: " + alienFirepower; 
        
            document.querySelector(".rightHull").innerHTML += "AMERICA DESTROYED"; 
            
        } else {

            america.hull -= alienFirepower

            document.querySelector(".rightHull").innerHTML += "America damaged, americaHull hit with Alien firepower: " + alienFirepower + " New Hull value = " + america.hull; 
        }
    } 
}

const americaAttack = () => {

    if (alien.hoardCount > 0){

        let shotPercent = doesShotHit()
        let isHit = new Boolean()

        document.querySelector(".leftDisplayBox").innerHTML = "America shot suceeded?  (sucess range: 1-7)  Value: " + shotPercent; 

        if ( shotPercent <= america.accuracy) {
            isHit = true
        } else {
            isHit = false 
        }

        document.querySelector(".leftDisplayBox").innerHTML += " " + isHit; 

        americaHullCheck(isHit) 

    } else {
        gameOver()
    } 
    
}

const gameOver = () => {

    document.querySelector(".buttonContainer").innerHTML = "GAME OVER"
    document.getElementById("startBut").disabled = true;
    document.getElementById("alienBut").disabled = true;
    
}

const americaHullCheck = (isHit) => {

    let alienHull = alien.hull

    if (isHit == true) {

        document.querySelector(".leftHull").innerHTML = "Hull Report:  ";
        
        if (alienHull <= america.firepower) {

            document.querySelector(".leftHull").innerHTML += " Alien Destroyed, alienHull: " + alienHull + " is less than or equal to American firepower: " + america.firepower;
     
            alien.hoardCount -= 1

            document.querySelector(".rightHoardCount").innerHTML = "Hoard Count =  " + alien.hoardCount;

            if (alien.hoardCount == 0 ){
                gameOver()
            }
        }
    } else {
        alienAttack(); 
    }
}





//americaAttack() 
//console.log(""); 

