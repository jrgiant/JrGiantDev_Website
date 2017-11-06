(function jrgiantdev(w,d) {
    d.onreadystatechange = (e) => d.readyState == 'interactive' && runOnloads();
    function runOnloads() {
        const mb = Array.from(d.querySelectorAll('.movingBackground'));
        let i = 0;
        let upward = true;
        let intv = setInterval(function(){
            mb.forEach((el, ind)=>{
            return el.style.backgroundPosition = `${i}px center`; 
            });
            if (i== 1000) upward = false;
            if (i== -1000) upward = true;
            i += upward? 1 : -1;
        }, 90)
    }
}(window,document))