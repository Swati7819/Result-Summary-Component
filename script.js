let data = [
  {
    category: "Reaction",
    score: 80,
    icon: "static/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "static/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "static/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "static/images/icon-visual.svg",
  },
];

let backgroundColors = [
  "rgb(255,246,245)",
  "rgb(255,251,242)",
  "rgb(242,251,250)",
  "rgb(243,243,253)",
];
let textColors = [
  "rgb(237,131,136)",
  "rgb(238,189,90)",
  "rgb(33,176,137)",
  "rgb(69,64,212)",
];
for (let i = 0; i < 4; i++) {
  let newElement = document.createElement("div");

  newElement.innerHTML = `<span><img src="${data[i].icon}" style="position: relative;
  top: 5px;
  right: 5px"> <b>${data[i].category}</b></span> <span style= "color: black;"><b>${data[i].score}</b>/ 100</span>`;

  newElement.style.maxWidth = "640px";
  newElement.style.marginTop = "1em";
  newElement.style.padding = "1em";
  newElement.style.backgroundColor = `${backgroundColors[i]}`;
  newElement.style.color = `${textColors[i]}`;
  newElement.style.display = "flex";
  newElement.style.justifyContent = "space-evenly";
  newElement.style.flexDirection = "row";
  newElement.style.gap = "1em";
  newElement.style.flexWrap = "wrap";

  newElement.style.borderRadius = "10px";

  document.getElementById("boxes").appendChild(newElement);
}

let result = document.getElementById("result");
let totalScore = 0;
for (let i = 0; i < data.length; i++) {
  totalScore += data[i].score;
}

result.innerText = Math.floor((totalScore / (data.length * 100)) * 100);
