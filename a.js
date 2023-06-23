// test the working ap.js code here 
// connect it to index.html 

// america Object  
let america = {
    name: "america", 
    hull: 20,
    firepower: 5, 
    accuracy: 5 
}
// aliens Object 
let alien = {
    name: "alien",  
    hull: getRandomInt(2,6), 
    firepower: getRandomInt(4,8),
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
   
    } else {
        gameOver() 
    }
     
}

const alienHullCheck = (isHit2) => {

    let alienFirepower = alien.firepower

    if (isHit2 == true) {

        document.querySelector(".rightHull").innerHTML = "Hull Report: "; 
         
        america.hull -= alienFirepower

        document.querySelector(".rightHull").innerHTML += "America damaged, americaHull hit with Alien firepower: " + alienFirepower + " New Hull value = " + america.hull; 

        if (america.hull < 1) {

            gameOver()
            document.querySelector(".rightHull").innerHTML += "America Destroyed, americaHull: " + america.hull + " is less than Alien firepower: " + alienFirepower; 
        
            document.querySelector(".buttonContainer").innerHTML += "   Aliens Prevail..."
            
        } else {

      
        }
    } 
}

const americaAttack = () => {

    // clearAll()

    if (alien.hoardCount > 0){

        let shotPercent = doesShotHit()
        let isHit = new Boolean()

        document.querySelector(".leftDisplayBox").innerHTML = "America shot suceeded?  (sucess range: 1-" + america.firepower + ")  Value: " + shotPercent; 
//-----------shotPercent -------------does shot hit is ran btwn 1-10
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
    if (alien.hoardCount == 0 ){
        document.querySelector(".buttonContainer").innerHTML += "   American Hegemony Reigns Supreme!!!"
    } else if (america.hull == 0) {
        document.querySelector(".buttonContainer").innerHTML += "   Aliens Prevail..."
    }
}

const clearAll = () => {

    document.querySelector(".leftDisplayBox").innerHTML = ""; 
    document.querySelector(".leftHull").innerHTML = ""; 
    // document.querySelector(".leftFirePower").innerHTML = ""; 
    // document.querySelector(".leftAccuracy").innerHTML = ""; 
    
    document.querySelector(".rightDisplayBox").innerHTML = ""; 
    document.querySelector(".rightHull").innerHTML = ""; 
    document.querySelector(".rightFirePower").innerHTML = ""; 
    document.querySelector(".rightHoardCount").innerHTML = ""; 
}

const americaHullCheck = (isHit) => {
//  check for true ------------------------------
    let alienHull = alien.hull

    if (isHit == true) {
        alien.hoardCount -= 1  // correct spot for this 
        document.querySelector(".leftHull").innerHTML = "Hull Report:  ";
        
        if (alienHull <= america.firepower) {

            document.querySelector(".leftHull").innerHTML += " Alien Destroyed, alienHull: " + alienHull + " is less than or equal to American firepower: " + america.firepower;
     
            

            document.querySelector(".rightHoardCount").innerHTML = "Hoard Count =  " + alien.hoardCount;

            if (alien.hoardCount == 0 ){
                gameOver()
            }
        }
    } else {
        alienAttack(); 
    }
}


