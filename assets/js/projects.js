const DEFAULTSTROKEWIDTH = 0.5;
const DEFAULTIMAGESIZE = 30;

class projectPage {
  constructor(){
    const carou = document.querySelector(".carousel"); // store carousel element
    const arrows = document.querySelectorAll(".wrapper i"); // store arrow buttons element
    const cardWidth = carou.querySelector(".card").offsetWidth;
    const cardGap = parseFloat(window.getComputedStyle(carou).getPropertyValue('gap'));

    let shouldDrag = false, initCursorPos, initScrollPos;

    arrows.forEach(button => {
      button.addEventListener("click", () => {
        if(button.id === "left")
          carou.scrollLeft -= cardWidth + cardGap;
        else
          carou.scrollLeft += cardWidth + cardGap;
      })
    });

    const dragStart = (e) => {
      shouldDrag = true;
      carou.classList.add("dragging");
      // Store original cursor and carousel scroll positions
      initCursorPos = e.pageX;
      initScrollPos = carou.scrollLeft;
    }

    const dragStop = () => {
      shouldDrag = false;
      carou.classList.remove("dragging");
    }

    const dragging = (e) => {
      if(shouldDrag == false) return;
      const shift = e.pageX - initCursorPos;
      carou.scrollLeft = initScrollPos - shift;
    }

    carou.addEventListener("mousedown", dragStart); // when the mouse is clicked
    carou.addEventListener("mousemove", dragging); // when the mouse is moved
    document.addEventListener("mouseup", dragStop); // when the mouse is lifted

    const imgConts = document.querySelectorAll(".img");
    const goldColour = "#FFD700";
    imgConts.forEach((imgCont) => {
      
      imgCont.addEventListener('mouseenter', () => {
        imgCont.style.backgroundColor = goldColour;
      });

      imgCont.addEventListener('mouseleave', () => {
        imgCont.style.backgroundColor = '';
      });
    });
      

    
  }

  
}

function whenDocumentLoaded(action) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", action);
  } else {
    // `DOMContentLoaded` already fired
    action();
  }
}

function initProject() {
  map_object = new projectPage();
}
