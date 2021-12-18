var pageTimer = document.querySelector("#timer");

function countdown() {
    var timeInterval = 10;

    setInterval(function() {
        if(timeInterval >= 1){
            pageTimer.textContent = timeInterval;
            timeInterval--;
        } else {
            pageTimer.textContent = "0";
            clearInterval();
        }
    }, 1000);
}

