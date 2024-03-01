function color(z) {
var a = getComputedStyle(z);
var b = a.backgroundColor;
document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}

function doAllThingsToAllBoxes() {
    populateSecondBox();
    colorThirdBoxConditionally();
    runFontChangeForTenSeconds();
}

//Input Function

function calculateAndReportNumberOfCharacters() {
    var inp = document.getElementById('inp_fld');
    var resfld = document.getElementById('result');
        
    if (inp && resfld) {
        if (inp.value) {
            var msg = 'you typed ' + inp.value.length + ' characters'
            resfld.innerHTML = msg;
            msgToConsole(msg);
        } else {
            resfld.innerHTML = 'well?'
        }
    }
}

//Condition Function

function colorThirdBoxConditionally() {
    pickMyColorBasedOnSeconds();
}

function pickMyColorBasedOnSeconds() {

    var theBox = document.getElementById('D3');
    if (theBox) {
        var seconds = new Date().getSeconds();
        var a = seconds % 5;
        switch (a) {
            case 0: theBox.style.background = 'yellow';break;
            case 1: theBox.style.background = 'red';break;
            case 2: theBox.style.background = 'blue';break;
            case 3: theBox.style.background = 'pink';break;
            default: theBox.style.background = 'green';
        }
        msgToConsole("Box 3 color is: " + theBox.style.background);
    }

}

//Console Function

function msgToConsole(msg) {
    var consol = document.getElementById('consol');
    if (consol) {
        consol.innerHTML = msg;
    }
}

//Time Function

function runFontChangeForTenSeconds() {
    setFontBasedOnSeconds();
    for (k = 1; k < 10; k++) {
        setTimeout(() => {
            setFontBasedOnSeconds();
        }, k*1000);
    }
}

function setFontBasedOnSeconds() {
    var spn = document.getElementById('text_to_grow');
    var cntr = document.getElementById('cntr');

    var seconds = new Date().getSeconds();
    var size = 8 + (seconds % 10) * 2;
    spn.style.fontSize = size + "px";
    var msg = "Font size: " + spn.style.fontSize;
    msgToConsole(msg);
    cntr.innerHTML = msg;
}


//Loop Function

function populateSecondBox() {
    var theBox = document.getElementById('D2');
    var innerHt = "";
    for (i = 1; i<10; i++) {
        innerHt = innerHt + i +  " - Mississipi<br/>";
    }
    theBox.innerHTML = innerHt;
}

//Interaction Function

function d1Red() {
    var d1 = document.getElementById('D1');
    var B1 = document.getElementById('B1');
    if (B1) {
        d1.style.background = 'red';
    }
}
function d1Blue() {
    var d1 = document.getElementById('D1');
    var B2 = document.getElementById('B2');
    if (B2) {
        d1.style.background = 'blue';
    }
}
function d1Green() {
    var d1 = document.getElementById('D1');
    var B3 = document.getElementById('B3');
    if (B3) {
        d1.style.background = 'green';
    }
}