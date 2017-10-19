(function (jdr){
jdr.onloads.push(()=>{
  if(navigator.userAgent.indexOf('MSIE') != -1 && navigator.userAgent.match(/MSIE (\d+\.\d+);/)){
    var style = document.createElement('style');
    style.type= "text/css";
    style.appendChild(document.createTextNode('.gradient {filter: none;}'));
    var head = document.head || document.getElementByTagName('head')[0];
    head.appendChild(style);
  });
}(window.jdr));
