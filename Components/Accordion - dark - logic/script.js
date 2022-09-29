const accordionTitle = document.querySelector(".accordion-title");
const accordionIcon = accordionTitle.querySelector(".accordion-icon");
const accordionContent = document.querySelector(".accordion-content");


accordionTitle.addEventListener("click", () => {
  accordionContent.classList.toggle("active");
  accordionTitle.classList.toggle("active");
});


