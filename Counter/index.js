const mainContainer = document.getElementById("mainConatiner");

const container = document.createElement("div");
const headingEl = document.createElement("h1");
headingEl.innerText = "No of Registration on a webpage";
headingEl.classList.add("heading");
container.appendChild(headingEl);
container.classList.add("counter-container");
mainContainer.appendChild(container);

let count = 100;
const countElement = document.createElement("p");
countElement.innerText = count;
countElement.classList.add("countText");
container.appendChild(countElement);

// const buttonContainer = document.createElement("div");
// const startButtonEl = document.createElement("button");
// startButtonEl.textContent = "Start";
// startButtonEl.classList.add("custom-button");
// const stopButtonEl = document.createElement("button");
// stopButtonEl.textContent = "Stop";
// stopButtonEl.classList.add("custom-button");
// buttonContainer.appendChild(startButtonEl);
// buttonContainer.appendChild(stopButtonEl);
// container.appendChild(buttonContainer);

function increaseCount() {
  count = count + 6;
  countElement.innerText = count;
}

setInterval(increaseCount, 1000);
document.getElementById("dateTime").textContent = new Date("2022-08-23T00:00:00").toLocaleTimeString();

function displayDateTime() {
  var now = new Date("2022-08-23T00:00:00");
  const dateTimeNode = document.getElementById("dateTime");

  setInterval(() => {
    now.setSeconds(now.getSeconds() + 1);
    dateTimeNode.innerHTML = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }, 1000);
}

displayDateTime();
