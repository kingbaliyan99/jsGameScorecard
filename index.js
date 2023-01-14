let count =0
let count1 = 0
let pEl1 = document.getElementById("p-el1")
let pEl2 = document.getElementById("p-el2")
let wins = document.getElementById("winner")
const winBtnEl = document.getElementById("winbtn-el")
function inc1()
{
    count += 1
    pEl1.textContent = count
}

function inc2()
{
    count += 2
    pEl1.textContent = count
}

function inc3()
{
    count += 3
    pEl1.textContent = count
}
function inc4()
{
    count1 += 1
    pEl2.textContent = count1
}
function inc5()
{
    count1 += 2
    pEl2.textContent = count1
}
function inc6()
{
    count1 += 3
    pEl2.textContent = count1
}
winBtnEl.addEventListener("click", function() {
    if(count > count1)
    {
        wins.textContent = "Home Team is Winner!!"
    }
    else if(count < count1){
        wins.textContent = "Guest Team is Winner!!"
    }
    else{
        wins.textContent = "Match Tied!!"
    }
})