const info11 = document.querySelector('.info11');
const info11Tabs = [...info11.querySelectorAll('.tabs li')];
const info11Image = info11.querySelector('.info11-image');
const info11Text = info11.querySelector('.info11-text');

const galleryContainer = [...document.querySelectorAll('.gallery-container')];
const galleryBtnsConatiner = document.querySelector('.gallery-buttons');
const galleryBtns = [...galleryBtnsConatiner.querySelectorAll('button')];
const galleryBtn1 = document.querySelector('.gallery-btn-1');
const galleryBtn2 = document.querySelector('.gallery-btn-2');
const galleryBtn3 = document.querySelector('.gallery-btn-3');
const galleryBtn4 = document.querySelector('.gallery-btn-4');

const text1 = "You can create your Mobile App easily with Framer. It just select the template that you like, choose the font, color and images, and you have it."
const text2 = "You can create your Website easily with Framer. It just select the template that you like, choose the font, color and images, and you have it."
const text3 = "You can create your Desktop App easily with Framer. It just select the template that you like, choose the font, color and images, and you have it."
const text4 = "You can create your Smart Wacth App easily with Framer. It just select the template that you like, choose the font, color and images, and you have it."
const texts = [text1, text2, text3, text4];


// INFO11 LOGIC
info11Tabs.forEach((item, i) => {
  item.addEventListener('click', () => {
    let current_index = i;

    info11Tabs.forEach((item, j) => {
      if (current_index === j) {
        item.classList.add("active");
        info11Image.setAttribute("src", `assets/photo-${current_index+1}.jpg`);
        info11Text.innerText = texts[current_index];
      } else {
        item.classList.remove("active");
      }
    })

  })
})

// GALLERY LOGIC
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

