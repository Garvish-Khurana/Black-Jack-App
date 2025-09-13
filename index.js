let firstcard = randomnumber()
let secondcard = randomnumber()
let sum = firstcard + secondcard
let blackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardEl = document.getElementById("card-el")
// let sumEl = document.querySelector(".sum-el")
// let cardEl = document.querySelector(".card-el")   class
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let Cards = [firstcard , secondcard]

function randomnumber(){
    return Math.floor(Math.random()*13 ) + 1
}

function startgame(){
    rendergame()
}

function rendergame(){
    cardEl.textContent = "Cards: "
    for(let i =0 ;i<Cards.length; i++){
    cardEl.textContent+= Cards[i] +" "; 
}
    sumEl.textContent = "Sum: " + sum
if(sum<21){
    message = "Do you want to draw a new card"
}
else if(sum==21){
    message = "You've got the BlackJack"
blackjack = true
}
else {
    message = "You're out of the game"
    isAlive = false
}

messageEl.textContent = message

message = "we're logging out"
}

function newcard(){
    let card = randomnumber()
    Cards.push(card)
    // cardEl.textContent += " " + card 
    sum += card
    rendergame()
}