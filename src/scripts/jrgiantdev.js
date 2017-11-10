class JrGiantDev {
    constructor() {
        this.isReady = false;
        this.onloads = [];
        document.readyState == 'complete' && this.runOnloads();
        document.onreadystatechange = (e) => document.readyState == 'interactive' && this.runOnloads();
    }
    runOnloads() {
        while (this.onloads.length) {
            this.onloads.shift().call();
        }
    }
}
var jrgiantdev = new JrGiantDev();
jrgiantdev.onloads.push(function () {
    const mb = Array.from(document.querySelectorAll('.movingBackground'));
    let i = 1000;
    let upward = true;
    setTimeout(function () {
        mb.forEach((el, ind) => el.style.backgroundPosition = `${i}px center`);
    }, 10);

    let intv = setInterval(function () {
        i = i == 1000 ? -1000 : 1000;
        mb.forEach((el, ind) => el.style.backgroundPosition = `${i}px center`);

    }, 40000);
});
jrgiantdev.onloads.push(()=>{
    const res = Array.from(document.querySelectorAll(".center-content"));
    margins(res);
    window.addEventListener('resize', ()=>{
        margins(res)
    });
});
function margins(res) {
    
    res.forEach((el, ind) => {
        const [elWidth, elHeight] = [el.clientWidth, el.clientHeight];
        const [elParentWidth, elParentHeight] = [el.parentElement.clientWidth, el.parentElement.clientHeight];

        const [marWidth, marHeight] = [elParentWidth - elWidth, elParentHeight - elWidth];
        el.style.marginRight = el.style.marginLeft = `${marWidth / 2}px`;
        el.style.marginTop = el.style.marginBottom = `${marHeight / 2}px`;
    })
}