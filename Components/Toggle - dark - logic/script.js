// TOGGLE COMPONENT LOGIC

const checkbox = document.querySelector("input");
const checkmark = document.querySelector(".toggle-checkmark");

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    console.log("1");
    document.body.style.backgroundColor = "var(--darkMode-background-bg0)";
    document.body.style.color = "var(--darkMode-text-primary)";
  } else {
    document.body.style.backgroundColor = "var(--lightMode-background-bg0)";
    document.body.style.color = "var(--lightMode-text-primary)";
    checkmark.style.borderColor = "var(--lightMode-elements-gray3)";
  }

});