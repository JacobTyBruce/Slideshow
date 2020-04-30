// EXP --Go back and see if we can make currentSlide a reusable variable so no repeat
var slideCtnr = $("#slideshow-ctnr");
var slideItems = $("#slideshow-ctnr").children(".ss-obj");
var slideLength = slideCtnr.children(".ss-obj").length;

function updateSlide(pos) {
  pos += 1;
  $("#currentSlide").text(pos);
}

function slide_Start() {
  // init slideshow and hide all but first element
  for (let i = 1; i < slideItems.length;i++) {
    slideItems.eq(i).css("display", "none");
  };
  $("#slideAmount").html(slideLength);
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

// when running if/else and calc index, used class arg and numerical exp so didnt calc btns, purely for clarity as btns are not a ssElem

function nextSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj")+1 < slideLength) {
    currentSlide.next().show();
    currentSlide.hide();
  }
  else {
    slideItems.first().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
};

function lastSlide() {
  let currentSlide = slideCtnr.children(".ss-obj:visible");
  if (currentSlide.index(".ss-obj") > 0) {
    currentSlide.prev().show();
    currentSlide.hide();
  }
  else {
    slideItems.last().show();
    currentSlide.hide();
  };
  currentSlide = slideCtnr.children(".ss-obj:visible");
  updateSlide(currentSlide.index(".ss-obj"));
}

window.onload = slide_Start();