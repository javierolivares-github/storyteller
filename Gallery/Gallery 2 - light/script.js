const galleryContainer = [...document.querySelectorAll('.gallery-container')];
const galleryBtnsConatiner = document.querySelector('.gallery-buttons');
const galleryBtns = [...galleryBtnsConatiner.querySelectorAll('button')];
const galleryBtn1 = document.querySelector('.gallery-btn-1');
const galleryBtn2 = document.querySelector('.gallery-btn-2');
const galleryBtn3 = document.querySelector('.gallery-btn-3');
const galleryBtn4 = document.querySelector('.gallery-btn-4');

// SCROLL LEFT
galleryContainer.forEach((item) => {
  galleryBtn1.addEventListener('click', () => {
    item.scrollLeft = 0;
  });

  galleryBtn2.addEventListener('click', () => {
    item.scrollLeft = 1220; 
  });

  galleryBtn3.addEventListener('click', () => {
    item.scrollLeft = 2440; 
  });
})


// BUTTON ACTIVE
galleryBtns.forEach((button, i) => {
  button.addEventListener('click', () => {
    let button_index_clicked = i;

    galleryBtns.forEach((button, j) => {
      if (button_index_clicked === j) {
        button.innerHTML = `<img src="images/circle-black.png" alt="">`;
      } else {
        button.innerHTML = `<img src="images/circle-gray.png" alt="">`;
      }
    })
  })
})