'use strict'


let array = [];
let arrayLength = 9;

/**
 * @description function to load data
 */
function loadData(){
    for(let i= 1;i<=arrayLength;i++){
        array.push(i);
    }
    displayArray();
    let developerName = document.getElementById("developer-name");
    developerName.innerHTML = 'Kaustav Chaudhuri';
}

/**
 * @description function to Display data
 */

function displayArray(){
    let boxContainer =  document.getElementById('number-box-container');
    array.forEach((element,index) =>{
       let data = document.createElement('div');
       data.setAttribute('id', 'data-' + element+'' );
       data.setAttribute('class','grid-item');
       let value = document.createElement('span');
       value.setAttribute('class','box-value');
       value.innerHTML = element;
       data.append(value);
       boxContainer.append(data);
    });
}

/**
 * @description function to Shuffle data
 */

function shuffleArray(){
    let boxContainer =  document.getElementById('number-box-container');
    boxContainer.innerHTML ='';
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
    displayArray();
}

/**
 * @description function to Sort data
 */

function sortArray(){
    let boxContainer =  document.getElementById('number-box-container');
    boxContainer.innerHTML = '';
    array.sort();
    displayArray();
}