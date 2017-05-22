var sliderMain = document.getElementsByClassName("slider")[0];
var divs = sliderMain.getElementsByClassName("slide-menu");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var timer = setInterval(slider, 3000);
var flagForT = true;

function startTime() {
    timer = setInterval(slider, 3000);
    flagForT = true
}
function pauseTimer() {
    if (flagForT) {
        clearInterval(timer);
        setTimeout(startTime, 5000);
        flagForT = false;
    }
}

next.onclick = function () {
    pauseTimer();
    return slider();
};

prev.onclick = function () {
    pauseTimer();
    return slider(true);
};
// default direction to right. If you want to change on left you can write true in variable "changeOfDirection"
function slider(changeOfDirection) {
    var active = sliderMain.getElementsByClassName("active");
    var nextElem;
    if (changeOfDirection) {
        nextElem = active[0].previousElementSibling;
    } else {
        nextElem = active[0].nextElementSibling;
    }
    var indexOf = [].indexOf;

    if (nextElem == null || !nextElem.classList.contains("slide-menu")) {
        nextElem = divs[divs.length - 1 - indexOf.call(divs, active[0])];
    }
    active[0].classList.remove("active");
    nextElem.classList.add("active");
}

/*Second slider for partner*/
var sliderPartner = document.getElementsByClassName("multtiple-slider")[0];
var divsPartner = sliderPartner.getElementsByClassName("slide-item");
var timer2 = setInterval(nextPartner, 3000);

function nextPartner() {
    var activElements = sliderPartner.getElementsByClassName("acitve");
    var lastElemen = divsPartner[divsPartner.length - 1];

    activElements[activElements.length - 1].classList.remove("acitve");
    sliderPartner.removeChild(lastElemen);
    lastElemen.classList.add("acitve");
    sliderPartner.insertBefore(lastElemen, activElements[0]);
}

var activDiv = document.getElementsByClassName("comment")[0];
var divs_target = document.getElementsByClassName("comment");

function createBtn(i) {
    var btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("name", i);
    btn.className = 'ctrl';

    return btn;
}

function countDiv(idNameWhen) {
    var target_div = document.getElementsByClassName(idNameWhen)[0];
    for (var i = 0; i < divs_target.length; i++) {
        var btn = createBtn(i);
        target_div.appendChild(btn);
        btn.addEventListener("click", normal);

    }

}

function normal(e) {
    var div = divs_target[e.target.name];
    activDiv.classList.remove("active");
    div.classList.add("active");
    activDiv = div;
};


countDiv("points-ctrl");