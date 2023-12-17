const submit = document.getElementById("submit");
const selectionSide = document.getElementById("selectionSide");
const tySide = document.getElementById("tySide");

submit.addEventListener("click", () => {
  selectionSide.classList.add("hidden");
  tySide.classList.remove("hidden");
});

const optionList = Array.from(document.getElementsByTagName("label"));
let selected = optionList[optionList.length - 1];
let currentSelect = 0;

const result = document.getElementById("result");


optionList.map(opt => opt.addEventListener("click", () => {
  if (!(Array.from(opt.parentElement.classList).includes("bg-primary"))) {
	selected.parentElement.classList.remove("bg-primary");
	opt.parentElement.classList.add("bg-primary");
	selected = opt;
	result.innerText = selected.htmlFor;
  }
}));

