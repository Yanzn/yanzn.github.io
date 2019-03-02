// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello javascript!';

// let iceCream = 'chocolate';
// if(iceCream === 'chocolate'){
//     alert('i like chocolate ice cream');
// } else {
//     alert('bbut chocolate is my favorate')
// }

// multiply(1, 3);
// multiply(3 * 3);
// multiply(10, 3);

// function multiply(num1, num2){
//     let result = null * num2;
//     return result;
// }

// document.querySelector('html').onclick = function() {
//     alert('do not click')
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/2.gif')
    }else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
}



function setUserName(){
    // prompt() 函数，弹出对话框，输入数据
    let myName = prompt('请输入你的名字');
    // localStorage API, 将数据存储在浏览器拱后续调用
    localStorage.setItem('name', myName);
    setHeading(myName);
}

function setHeading(name){
    document.querySelector('h1').textContent = 'I have a good day -- ' + name;
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;