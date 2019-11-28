export default function(opts) {
  let isScrolling = false;

  window.addEventListener("scroll", throttleScroll, false);

  function throttleScroll(e) {
    if (isScrolling === false) {
      window.requestAnimationFrame(function() {
        dealWithScrolling(e);
        isScrolling = false;
      });
    }
    isScrolling = true;
  }

  function dealWithScrolling(e) {
    console.log(window.innerHeight + window.pageYOffset);

    return window.innerHeight + window.pageYOffset;
  }
}
