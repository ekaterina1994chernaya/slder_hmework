let images = [{
    url: "https://images.unsplash.com/photo-1662625990528-5ae1d5f49e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    title: "LIVING ROOM"
  }, {
    url: "https://images.unsplash.com/photo-1645237455598-e8f02d706a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "White living room"
  }, {
    url: "https://images.unsplash.com/photo-1661923104674-875ad54220ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "Bed room"
  }, {
    url: "https://images.unsplash.com/photo-1661922995947-a5e868536053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    title: "Place for relax"
  }, {
    url: "https://images.unsplash.com/photo-1661243038841-a8d87ffe151b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    title: "Kitchen"
}];

function initSlider(options) {
    if (!images || !images.length) return;
    
    options = options || {
      titles: false,
      dots: true
    };
    
    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");
    let sliderDots = document.querySelector(".slider__dots");
    
    initImages();
    initArrows();
    
    if (options.dots) {
      initDots();
    }
    
    if (options.titles) {
      initTitles();
    }
    
    function initImages() {
      images.forEach((image, index) => {
        let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
        sliderImages.innerHTML += imageDiv;
      });
    }
    
    function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNumber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
          }
          moveSlider(nextNumber);
        });
      });
     
    }
    
    
    function initDots() {
      images.forEach((image, index) => {
        let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
      });
      sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlider(this.dataset.index);
        })
      })
    }
    
    function moveSlider(num) {
      sliderImages.querySelector(".active").classList.remove("active");
      sliderImages.querySelector(".n" + num).classList.add("active");
      if (options.dots) {
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
      }
      if (options.titles) changeTitle(num);
    }
    
    function initTitles() {
      let titleDiv = `<div class="slider__images-title">${images[0].title}</div>`;
    }
    
    function changeTitle(num) {
      if (!images[num].title) return;
    }
  }
  
  let sliderOptions = {
    dots: true,
    titles: true,
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    initSlider(sliderOptions);
  });


  
  function eventKey(e) {
    switch (e.keyCode) {
  
      case 37:
        prev()
        break;
  
      case 39:
        next()
        break;
  
    }
  }
  addEventListener("keydown", eventKey);