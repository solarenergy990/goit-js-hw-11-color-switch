const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
  bodyContainer: document.querySelector("body"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

const onButtonStartClick = (evt) => {
  if (!evt.target.dataset.action === "start") {
    return;
  }
  refs.buttonStart.removeEventListener("click", onButtonStartClick); // чи краще дизейблити кнопку "старт" за умовою isActive = true/false?
  timerId = setInterval(changeColors, 1000);
  console.log("button start was clicked");
};

const onButtonStopClick = () => {
  refs.buttonStart.addEventListener("click", onButtonStartClick);
  clearInterval(timerId);
  console.log("button stop was clicked");
};

const changeColors = () => {
  let colorIndex = randomIntegerFromInterval(0, colors.length - 1);
  refs.bodyContainer.style.backgroundColor = colors[colorIndex];
};

refs.buttonStart.addEventListener("click", onButtonStartClick);
refs.buttonStop.addEventListener("click", onButtonStopClick);
