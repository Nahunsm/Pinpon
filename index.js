
let countEl = document.getElementById("count-el")
let homeScore = document.getElementById("home-score")
let count = 0
let home = 0


function incrementmasuno() {
    count += 1
    countEl.textContent = count
}

function incrementmasdos() {
    count += 2
    countEl.textContent = count
}

function incrementmastres() {
    count += 3
    countEl.textContent = count
}

function increaseHomeScoreOne() {
    home +=1
    homeScore.textContent = home
}

function reset() {
    let result = count * home * 0
     countEl.textContent = result 
     homeScore.textContent = result 
  
}