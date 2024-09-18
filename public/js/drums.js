
const wButton = document.querySelector("button")
const buttonsAll = document.querySelectorAll("button")


function handleClick() {
   alert("got clicked!")
}

function playDrum(key) {
 // const buttonLetter = this.innerText;
  
  switch (key) {
     case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

     case "a":
        var bass = new Audio("sounds/bass.mp3");
        bass.play();
        break;

     case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

     case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

     case "k":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

     case "j":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

     case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
  
     default: console.log(buttonLetter)
        break;
  }


}

// wButton.addEventListener("click", handleClick)


/*buttonsAll.forEach(function(currentButton) {
  currentButton.addEventListener("click", handleClick)
})     */

const drumButtons = document.querySelectorAll(".drum")
for (let i=0; i<drumButtons.length; i++) {

  
  drumButtons[i].addEventListener("click", function() {
     let buttonInnerHTML = this.innerHTML;
     playDrum(buttonInnerHTML)
     buttonAnimation(buttonInnerHTML)
  }
  )
}

document.addEventListener("keydown", function(event) {
  playDrum(event.key);
  buttonAnimation(event.key);
}
)


function buttonAnimation(currentKey) {
  let currentButton = document.querySelector(`.${currentKey}`);
  currentButton.classList.add("pressed");

  setTimeout(function() {
     currentButton.classList.remove("pressed");
  }, 100);
}


document.getElementById("multiButtonSubmit").addEventListener("click", function() {
  const buttonList = document.querySelector(".multiButton").value;
  const gapDuration = document.querySelector("#gapDuration").value;
  console.log(gapDuration);
  //console.log(buttonList)
  for (let i=0; i<buttonList.length; i++) {
     setTimeout(function() {
     playDrum(buttonList[i]);
     buttonAnimation(buttonList[i]);
     }, gapDuration * 1000 * i);

  };
})


document.getElementById("saveButton").addEventListener("click", function() {
  const buttonList = document.querySelector(".multiButton").value;
  const gapDuration = document.querySelector("#gapDuration").value;
  document.getElementById("drumTable").innerHTML += `
  <tr>
  <th>${buttonList}</th>
  <th>${gapDuration}</th>
  <th><a href="#" onclick="drumTrackReappear(${buttonList}, ${gapDuration})">Use</a></th>   
  </tr>
  
  `;                 //this anchor isn't working properly
})


function drumTrackReappear(track, duration) {                         //assume this function works, will need to check later
  document.querySelector(".multiButton").innerHTML = track;
  document.querySelector(".gapDuration").innerHTML = duration;
  
}


//button to go to piano page
document.getElementById('goToPage2').addEventListener('click', () => {
    window.location.href = '/piano';
});