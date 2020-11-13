(function () {
  // SLIDER ELEMENTS
  const slides = document.querySelectorAll(".carousel__slide");
  const sliderMask = document.querySelector(".carousel__mask");
  const prev = document.querySelector(".carousel__control--prev");
  const next = document.querySelector(".carousel__control--next");
  const indicator = document.querySelector(".carousel__indicator");

  // EVENT LISTENERS
  typeof next !== null && next.addEventListener("click", nextStep);
  typeof prev !== null && prev.addEventListener("click", previousStep);

  // ARRAY OF SLIDES IN ORDER (INDEX)
  let totalSlides = [];

  // ADD LEFT POSITION TO ALL SLIDES
  for (let i = 0; i < slides.length; i++) {
    totalSlides.push(i);
    slides[i].style.left = "0px";
    slides[i].style.transform = "translateX(0px)";
  }

  // ADD SKEW TO SLIDES
  slides.forEach((slide, index) => {
    if (index === totalSlides[2]) {
      slide.style.transform = slide.style.transform.replace("scale(1.4)", "") + "scale(1.8)";
      slide.style.perspective = "0px";
      slide.classList.add("middle");
      slide.classList.remove("edge");
      slide.classList.remove("outer");

      slide.firstElementChild.style.transform = "none";
      setTimeout(() => {
        indicator.innerHTML = slide.id;
      }, 200);
      console.log(slide.id);
    } else if (index === totalSlides[1] || index === totalSlides[3]) {
      slide.style.transform = slide.style.transform.replace("scale(1.8)", "") + "scale(1.4)";
      slide.style.perspective = "1000px";
      slide.classList.add("edge");
      slide.classList.remove("middle");
      slide.classList.remove("outer");

      if (index === totalSlides[1]) {
        slide.firstElementChild.style.transform = "rotateY(-18deg)";
      } else {
        slide.firstElementChild.style.transform = "rotateY(18deg)";
      }
    } else if (index === totalSlides[0] || index === totalSlides[4]) {
      slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
      slide.style.perspective = "1000px";
      slide.classList.add("outer");
      slide.classList.remove("middle");
      slide.classList.remove("edge");

      if (index === totalSlides[0]) {
        slide.firstElementChild.style.transform = "rotateY(-33deg)";
      } else {
        slide.firstElementChild.style.transform = "rotateY(33deg)";
      }
    } else {
      slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
      slide.style.perspective = "0px";
      slide.classList.remove("middle");
      slide.classList.remove("edge");
      slide.classList.remove("outer");

      slide.firstElementChild.style.transform = "none";
    }
  });

  function updateSlidesToShow(direction) {
    // GET TRANSLATE OF A MIDDLE SLIDE
    const slideTranslate = parseFloat(slides[7].style.transform.replace("translateX(", "").replace("px)", "")) || 0;

    // CHECK IF THE SLIDE IS ONE POSITION TO THE RIGHT OF ORIGINAL INDEX
    const isAfterOriginalIndex =
      slideTranslate !== 0 && parseFloat(slides[7].style.left, 10) !== 0
        ? slideTranslate - Math.abs(parseFloat(slides[7].style.left, 10)) === 200 ||
          Math.abs(parseFloat(slides[7].style.left, 10)) - Math.abs(slideTranslate) === 200
        : slideTranslate - parseFloat(slides[7].style.left, 10) === -200;

    // CHECK IF SLIDE IS ONE POSITION TO THE LEFT OF ORIGINAL INDEX
    const isBeforeOriginalIndex =
      Math.abs(slideTranslate) - parseFloat(slides[7].style.left, 10) === 200 && Math.abs(parseFloat(slides[4].style.left, 10)) !== 0;

    // RESET ALL TO 0 IF SLIDES ARE 1 INDEX AWAY FROM ORIGINAL INDEX
    if (direction === "forwards" && isAfterOriginalIndex) {
      slides.forEach((slide, index) => {
        if (index === totalSlides[1]) {
          slide.classList.add("middle");
        } else {
          slide.classList.remove("middle");
        }
        if (index === totalSlides[0]) {
          setTimeout(() => {
            slide.style.transition = "none";
            slide.style.left = "0px";
            slide.style.transform = "translateX(0px)";
          }, 310);
        } else {
          slide.style.transition = ".6s ease-in-out";
          slide.style.left = "0px";
          slide.style.transform = "translateX(0px)";
        }
      });

      // SHIFT INDEXES ARRAY FIRST ITEM TO END
      totalSlides.push(totalSlides.shift());
    } else if (direction === "backwards" && isBeforeOriginalIndex) {
      slides.forEach((slide, index) => {
        if (index === totalSlides[1]) {
          slide.classList.add("middle");
        } else {
          slide.classList.remove("middle");
        }
        if (index === totalSlides[totalSlides.length - 1]) {
          slide.classList.add("testingThisClassNameForThisSlide");
          setTimeout(() => {
            slide.style.transition = "none";
            slide.style.left = "0px";
            slide.style.transform = "translateX(0px)";
          }, 310);
        } else {
          slide.classList.remove("testingThisClassNameForThisSlide");
          slide.style.transition = ".6s ease-in-out";
          slide.style.left = "0px";
          slide.style.transform = "translateX(0px)";
        }
      });

      // SHIFT INDEXES ARRAY LAST ITEM TO START
      totalSlides.unshift(totalSlides.pop());
    } else {
      if (direction === "forwards") {
        slides.forEach((slide, index) => {
          // ADD TRANSITION
          slide.style.transition = ".6s ease-in-out";

          // GET CURRENT TRANSLATION
          const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0;

          // MOVE ALL SLIDES LEFT
          slide.style.left = `${parseFloat(slide.style.left, 10) - slide.clientWidth}px`;

          if (index === totalSlides[3]) {
            slide.style.transform = slide.style.transform.replace("scale(1.4)", "") + "scale(1.8)";
            slide.style.perspective = "0px";
            slide.classList.add("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
            setTimeout(() => {
              indicator.innerHTML = slide.id;
            }, 200);
            console.log(slide.id);
          } else if (index === totalSlides[2] || index === totalSlides[4]) {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "") + "scale(1.4)";
            slide.style.perspective = "1000px";
            slide.classList.add("edge");
            slide.classList.remove("middle");
            slide.classList.remove("outer");

            if (index === totalSlides[2]) {
              slide.firstElementChild.style.transform = "rotateY(-18deg)";
            } else {
              slide.firstElementChild.style.transform = "rotateY(18deg)";
            }
          } else if (index === totalSlides[1] || index === totalSlides[5]) {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
            slide.style.perspective = "1000px";
            slide.classList.add("outer");
            slide.classList.remove("middle");
            slide.classList.remove("edge");

            if (index === totalSlides[1]) {
              slide.firstElementChild.style.transform = "rotateY(-33deg)";
            } else {
              slide.firstElementChild.style.transform = "rotateY(33deg)";
            }
          } else {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
            slide.style.perspective = "0px";
            slide.classList.remove("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
          }

          // MOVE FIRST SLIDE TO END
          if (index === totalSlides[0]) {
            setTimeout(() => {
              // SET TRANSITION TO NONE
              slide.style.transition = "none";

              // SET NEW TRANSFORM
              if (currentTranslate !== 0) {
                slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length + currentTranslate}px
                )`;
              } else {
                slide.style.transform = `translateX(
                  ${slide.clientWidth * slides.length}px
                )`;
              }
            }, 310);
          }
        });

        // SHIFT INDEXES ARRAY FIRST ITEM TO END
        totalSlides.push(totalSlides.shift());
      } else if (direction === "backwards") {
        // TRANSFORM EACH SLIDE LEFT
        slides.forEach((slide, index) => {
          if (index === totalSlides[1]) {
            slide.style.transform = slide.style.transform.replace("scale(1.4)", "") + "scale(1.8)";
            slide.style.perspective = "0px";
            slide.classList.add("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
            setTimeout(() => {
              indicator.innerHTML = slide.id;
            }, 200);
            console.log(slide.id);
          } else if (index === totalSlides[0] || index === totalSlides[2]) {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "") + "scale(1.4)";
            slide.style.perspective = "1000px";
            slide.classList.add("edge");
            slide.classList.remove("middle");
            slide.classList.remove("outer");

            if (index === totalSlides[0]) {
              slide.firstElementChild.style.transform = "rotateY(-18deg)";
            } else {
              slide.firstElementChild.style.transform = "rotateY(18deg)";
            }
          } else if (index === totalSlides[3] || index === totalSlides[totalSlides.length - 1]) {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
            slide.style.perspective = "1000px";
            slide.classList.add("outer");
            slide.classList.remove("middle");
            slide.classList.remove("edge");

            if (index === totalSlides[totalSlides.length - 1]) {
              slide.firstElementChild.style.transform = "rotateY(-33deg)";
            } else {
              slide.firstElementChild.style.transform = "rotateY(33deg)";
            }
          } else {
            slide.style.transform = slide.style.transform.replace("scale(1.8)", "").replace("scale(1.4)", "");
            slide.style.perspective = "0px";
            slide.classList.remove("middle");
            slide.classList.remove("edge");
            slide.classList.remove("outer");

            slide.firstElementChild.style.transform = "none";
          }

          // ADD TRANSITION
          slide.style.transition = ".6s ease-in-out";

          // GET CURRENT TRANSLATION
          const currentTranslate = parseFloat(slide.style.transform.replace("translateX(", "").replace("px)", "")) || 0;

          // MOVE ALL SLIDES LEFT
          slide.style.left =
            Math.abs(parseFloat(slide.style.left, 10)) === 0 ? `${slide.clientWidth}px` : `${parseFloat(slide.style.left, 10) + slide.clientWidth}px`;

          // MOVE LAST SLIDE TO START
          if (index === totalSlides[totalSlides.length - 1]) {
            setTimeout(() => {
              // SET TRANSITION TO NONE
              slide.style.transition = "none";

              // SET NEW TRANSFORM
              if (currentTranslate === 0) {
                slide.style.transform = `translateX(
                  -${slide.clientWidth * slides.length}px
                )`;
              } else {
                slide.style.transform = `translateX(
                  ${currentTranslate - slide.clientWidth * slides.length}px
                )`;
              }
            }, 310);
          }
        });

        // SHIFT INDEXES ARRAY LAST ITEM TO START
        totalSlides.unshift(totalSlides.pop());
      }
    }
  }

  function nextStep(e) {
    e.preventDefault();

    updateSlidesToShow("forwards");

    next.removeEventListener("click", nextStep);

    setTimeout(() => {
      next.addEventListener("click", nextStep);
    }, 310);
  }

  function previousStep(e) {
    e.preventDefault();

    updateSlidesToShow("backwards");

    prev.removeEventListener("click", previousStep);

    setTimeout(() => {
      prev.addEventListener("click", previousStep);
    }, 310);
  }
})();
