const timerE = document.querySelector(".ct");
const input = document.getElementById("text");
const letters = document.getElementsByClassName("let");
const button = document.getElementById("but")
const sequence = ["A", "B", "C", "D", "E", 
                  "F", "G", "H", "I", "J", 
                  "K", "L", "M", "N", "O", 
                  "P", "Q", "R", "S", "T", 
                  "U", "V", "W", "X", "Y", "Z"];
const sequence2 = ["a", "b", "c", "d", "e", 
                  "f", "g", "h", "i", "j", 
                  "k", "l", "m", "n", "o", 
                  "p", "q", "r", "s", "t", 
                  "u", "v", "w", "x", "y", "z"];
let currentIndex = 0;
let temp = 0;
let time = 0;
let interval;

input.addEventListener("input", function(){
    temp++;
    if(temp === 1) {
        interval = setInterval(() => {
            time++;
            timerE.innerHTML = `${(time / 100).toFixed(2)}s`;
        }, 1);
    }
    ///////////////
    let value = input.value;
    let lastChar = value.slice(-1);

    letters[currentIndex+1].style.color = "blue";
    letters[currentIndex+1].style.fontWeight = "1000";

    if(lastChar == sequence[currentIndex] || lastChar == sequence2[currentIndex]){
        currentIndex++
    } else {
        input.value = value.slice(0, -1);
    }
    if(currentIndex >= sequence.length){
        clearInterval(interval);
        button.style.display = "block";
        currentIndex = 0;
    }
    ///////////////
    document.addEventListener("keydown", e => {
        let value = input.value;
        if(e.key == "Backspace"){
            e.preventDefault()
        }
    })
});

// input.addEventListener('focus', function() {
//     input.value = '';
// });
button.addEventListener("click", function(){
    input.value = '';
    clearInterval(interval);
    timerE.innerHTML = "0.00s"
    currentIndex = 0;
    time = 0;
    temp = 0;
    const letters2 = Array.from(letters);
    letters2.forEach(letter => {
        letter.style.color = "black";
        letter.style.fontWeight = "normal";
    });
    letters[0].style.color = "blue";
    letters[0].style.fontWeight = "1000";
})