const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const content = wrapper.querySelector(".content");
const options = wrapper.querySelector(".options");

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", "Item 11", "Item 12", "Item 13", "Item 14", "Item 15", "Item 16", "Item 17"];

function addItem(selectedItem) {
  options.innerHTML = "";
  items.forEach(item => {
    let isSelected = item == selectedItem ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${item}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addItem();

function updateName(selectedLi) {
  addItem(selectedLi.innerText);
  wrapper.classList.toggle("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
  selectBtn.classList.add("active");
  selectBtn.firstElementChild.classList.add("active");
  content.classList.toggle("active");
}

selectBtn.addEventListener("click", () => {
  content.classList.toggle("active");
  wrapper.classList.toggle("active");
})
