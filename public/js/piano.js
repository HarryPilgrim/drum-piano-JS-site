const whiteKeysArray = ["z", "x", "c", "v", "b", "n", "m"]
const blackKeysArray = ["s", "d", "g", "h", "j"]
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");


document.getElementById('goToPage1').addEventListener('click', () => {
    window.location.href = '/drums';
});

document.addEventListener("keydown", e => {
    if (e.repeat) return;
    const pressedKey = e.key;
    const whiteKeyIndex = whiteKeysArray.indexOf(pressedKey);
    const blackKeyIndex = blackKeysArray.indexOf(pressedKey);

    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})





keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}


document.getElementById("multiButtonSubmit").addEventListener("click", function() {
    let buttonList = document.querySelector(".multiButton").value;

    const gapDuration = document.querySelector("#gapDuration").value;
    console.log(gapDuration);
    //console.log(buttonList)
    for (let i=0; i<buttonList.length; i++) {
       setTimeout(function() {
        const noteAudio = document.querySelector(`.${buttonList[i]}`);     //need to convert from ZSX to C_s etc
        noteAudio.currentTime = 0;
        noteAudio.play();
        // key.classList.add("active");
        // noteAudio.addEventListener("ended", () => {
        //     key.classList.remove("active");
        // });
       
       }, gapDuration * 1000 * i);
  
    };
  })