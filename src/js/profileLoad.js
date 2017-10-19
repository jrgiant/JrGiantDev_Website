(function (jdr) {
  jdr.onloads.push(function () {
    hideShowToTop();
    window.addEventListener('scroll', hideShowToTop);
  });
  function hideShowToTop() {
    var back_to_top = document.querySelector("a.back-to-top");
    if (back_to_top){
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 200){
      back_to_top.style.display="block";
    }
    else{
      back_to_top.style.display="none";
    }
  }
  }
}(window.jdr))
