const accordionTitles = document.querySelectorAll(".accordion-title");
const accordionContents = document.querySelectorAll(".accordion-content");

// One Element:
// accordionTitle.addEventListener("click", () => {
//   accordionContent.classList.toggle("active");
//   accordionTitle.classList.toggle("active");
// });

// Multiple Elements:
accordionTitles.forEach((title, i) => {
  title.addEventListener("click", () => {
    title.classList.toggle("active");

    accordionContents.forEach((content, j) => {
      if (i === j) {
        content.classList.toggle("active");
      }
    });
  })
})




