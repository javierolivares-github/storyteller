/* REVIEWS V5 - COMPONENT LOGIC*/

const allStars = document.querySelectorAll(".star");


allStars.forEach((star, i) => {
  star.addEventListener("click", () => {
    let current_star_level = i + 1;

    allStars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        console.log("yes");
        star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3.03369L14.5778 9.24007L21.2665 9.77705L16.1704 14.1485L17.7277 20.686L12 17.1826L6.27224 20.686L7.82951 14.1485L2.7334 9.77705L9.42218 9.24007L12 3.03369Z" fill="#fff"/>
        </svg>`;
      } else {
        console.log("Not");
        star.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.03369L14.5778 9.24007L21.2665 9.77705L16.1704 14.1485L17.7277 20.686L12 17.1826L6.27224 20.686L7.82951 14.1485L2.7334 9.77705L9.42218 9.24007L12 3.03369ZM12 5.96662L10.1974 10.3065L5.51654 10.6822L9.08293 13.7415L7.99366 18.3143L12 15.8639L16.0063 18.3143L14.917 13.7415L18.4834 10.6822L13.8025 10.3065L12 5.96662Z" fill="#fff"/>
        </svg>`;
      }
    })

  })
})