let nIntervId;
let counter = document.getElementById('counter')
let intUp = 1

let foo = (function count() {
    setTimeout(() => {
        if (!nIntervId) {
            nIntervId = setInterval(upCount, 1000);
          }
        count();
    }, 1000);
  })();

function upCount() {
    counter.innerText = intUp++   
}
//this button and function is for increasing the count manually by 1 per button click
const plusBtn = document.querySelector("#plus");
plusBtn.addEventListener("click", e => {
    upOne()
});
function upOne() {
    counter.innerText = intUp++
}

const minusBtn = document.getElementById("minus")
minusBtn.addEventListener("click", e => {
    downOne()
});
function downOne() {
    counter.innerText = intUp--
}




// function flashText() {
//   const oElem = document.getElementById("counter");
//   oElem.className = oElem.className === "go" ? "stop" : "go";
// }

// function stopTextColor() {
//   clearInterval(nIntervId);
//   // release our intervalID from the variable
//   nIntervId = null;
// }

