const { log } = console;

const stopButton = document.querySelector("footer .stop");
const stopLight = document.querySelector(".light.stop");

const cautionButton = document.querySelector("footer .caution");
const cautionLight = document.querySelector(".light.caution");

const goButton = document.querySelector("footer .go");
const goLight = document.querySelector(".light.go");

const autoStart = document.querySelector("footer .autoStart");
const autoStop = document.querySelector("footer .autoStop");

stopButton.addEventListener("click", (evt) => {
  turnOffLights();
  console.log("evt ibj", evt);
  stopLight.classList.add("on");
});

cautionButton.addEventListener("click", (evt) => {
  turnOffLights();
  console.log("evt ibj", evt);
  cautionLight.classList.add("on");
});

goButton.addEventListener("click", (evt) => {
  turnOffLights();
  console.log("evt ibj", evt);
  goLight.classList.add("on");
});

function turnOffLights() {
  stopLight.classList.remove("on");
  cautionLight.classList.remove("on");
  goLight.classList.remove("on");
}

//Auto lights

const order = [
  [stopLight, cautionLight],
  [goLight],
  [cautionLight],
  [stopLight],
];

let i = 0;

let timer = undefined;

autoStart.addEventListener("click", function () {
  stopLight.classList.add("on");
  clearInterval(timer);
  timer = setInterval(function () {
    turnOffLights();
    const lights = order[i];
    for (light of lights) {
      light.classList.add("on");
    }
    checkOrderPosition();
  }, 1000);
});

autoStop.addEventListener("click", function () {
  clearInterval(timer);
  turnOffLights();
});

function checkOrderPosition() {
  if (i < order.length - 1) {
    i += 1;
  } else {
    i = 0;
  }
}
