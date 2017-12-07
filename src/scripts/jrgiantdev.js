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
    const res = Array.from(document.querySelectorAll("[class^='center-content']"));
    margins(res);
    window.addEventListener('resize', ()=>{
        debounce(() => margins(Array.from(document.querySelectorAll(".center-content"))), 10);
    });
});
function margins(res) {
    res.forEach((el, ind) => {
        const [elWidth, elHeight] = [el.clientWidth, el.clientHeight];
        const [elParentWidth, elParentHeight] = [el.parentElement.clientWidth, el.parentElement.clientHeight];
        const [marWidth, marHeight] = [elParentWidth - elWidth, elParentHeight - elHeight];
        if (el.classList.contains('center-content-height')) {
            el.style.marginTop = el.style.marginBottom = `${marHeight / 2}px`;
        }
        else if (el.classList.contains('center-content-width')){
            el.style.marginRight = el.style.marginLeft = `${marWidth / 2}px`;
        }
        else {
            el.style.marginRight = el.style.marginLeft = `${marWidth / 2}px`;
            el.style.marginTop = el.style.marginBottom = `${marHeight / 2}px`;
        }
    })
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// from {@link: https://davidwalsh.name/javascript-debounce-function}
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};