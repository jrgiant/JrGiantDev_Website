(function (jdr) {
  jdr.onloads.push(function () {
    hideShowToTop();
    changeNav();
    window.addEventListener('scroll', () => {hideShowToTop();changeNav();});
  });
  function hideShowToTop() {
    var back_to_top = document.querySelector("a.back-to-top");
    if (back_to_top){
      back_to_top.style.display = isScrolledPast(150)?"block":"none";
      back_to_top.style.opacity = isScrolledPast(200)?"1":"0";
    }
  }
  function changeNav() {
    var nav = document.querySelector('nav');
    if(nav){
      var isScrolled = isScrolledPast(200);
      var title = nav.querySelector(".title");
      title.style.display = isScrolledPast(150)?"block":"none";
      title.style.opacity = isScrolledPast(200)?"1":"0";
      var buttons = nav.querySelectorAll(".link-button");
      buttons.forEach((b, i)=>{
        b.style.display = isScrolledPast(150)?"block":"none";
        b.style.opacity = isScrolledPast(200)?"1":"0";
      });
      nav.style.backgroundColor=isScrolled?"#1d1075":"unset";


    }
  }
  function getScrollTop(){
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }
  function isScrolledPast(offset) {
    if (getScrollTop() > offset){
      return true;
    }
    return false;
  }
}(window.jdr))
