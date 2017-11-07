(function jrgiantdev(w,d) {
    d.onreadystatechange = (e) => d.readyState == 'interactive' && runOnloads();
    function runOnloads() {
        const mb = Array.from(d.querySelectorAll('.movingBackground'));
        let i = 1000;
        let upward = true;
        setTimeout(function () {
            mb.forEach((el, ind) => el.style.backgroundPosition = `${i}px center`);
        },10);
        
        let intv = setInterval(function(){
            i = i == 1000 ? -1000: 1000;
            mb.forEach((el, ind)=>el.style.backgroundPosition = `${i}px center`);
            
        }, 20000)
    }
}(window,document))