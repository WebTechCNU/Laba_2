modal = document.getElementById("modal");
closeModalButton = document.getElementById("close-modal-button");
timer = document.getElementById("timer");

const timeToAd = 10000;
let adTime = 5;

function showModal() {
    modal.style.display = "block";
}

closeModalButton.addEventListener("click", function() {
    if (adTime <= 0) {
        modal.style.display = "none";
    }
})

function countdown() {
    let interval = setInterval(function() {
        timer.innerHTML = adTime;
        adTime--;
        if (adTime < 0) {
            timer.innerHTML = "Ви можете закрити рекламу!";
            clearInterval(interval);
        }
    }, 1000);
}

setInterval(countdown, timeToAd - 1000);
setTimeout(showModal, timeToAd);