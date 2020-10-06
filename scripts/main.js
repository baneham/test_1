/*
 COMMENTING ON THE SCRIPT AS A TEST 
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/title.jpg') {
      myImage.setAttribute('src','images/title2.jpg');
    } else {
      myImage.setAttribute('src','images/title.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Rigatoni is cool, ' + storedName;
  }

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Rigatoni is cool, ' + myName;
    }
  }
  myButton.onclick = function() {
    setUserName();
  }
  