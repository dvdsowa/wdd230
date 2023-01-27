const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const Section1 = document.querySelector("#learning-activities");
const Section2 = document.querySelector("#project");
const Section3 = document.querySelector("#information");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		Section1.style.background = "#000";
		Section2.style.background = "#000";
		Section3.style.background = "#000";
		modeButton.textContent = "❎ Toggle light mode";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
		Section1.style.background = "#eeeeee";
		Section2.style.background = "#eeeeee";
		Section3.style.background = "#eeeeee";
		modeButton.textContent = "☑️ Toggle dark mode";
	}
});