
var myImage = document.querySelector('img');

myImage.onclick = function () {
    "use strict";
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/xman.jpg') {
        myImage.setAttribute('src', 'images/replace.jpg');
    } else {
        myImage.setAttribute('src', 'images/xman.jpg');
    }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
    "use strict";
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Xman is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storeName = localStorage.getItem('name');
    myHeading.innerHTML = 'Xman is cool, ' + storeName;
}
myButton.onclick = function () {
    "use strict";
    setUserName();
};