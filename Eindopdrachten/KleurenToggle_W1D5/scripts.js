const liNodeList = document.querySelectorAll('li');
let liArray = [];
let colorArray=["lightslategrey","limegreen", "skyblue", "crimson", "orangered", "hotpink", '']; 
const body = document.getElementById('body-color');
const dropdown = document.getElementById('dropdown-nav');
const hamburger = document.getElementById('burger');

// Push HTML Block to individual array items
Array.from(liNodeList).forEach (function(li){
    liArray.push(li)
});
// mouse click eventhandeler
for (let i=0; i < liArray.length; i++){
    liArray[i].onclick = function(){

        if (liArray[i] == liArray[6]){
            liArray[6] = prompt("give your own hex color value!")
            let textValue =liArray[6];
            document.body.style.backgroundColor = liArray[6]
            document.getElementById('color-heading').innerHTML = (textValue)
        }else{
            document.body.style.backgroundColor = colorArray[i];
            document.getElementById('color-heading').innerHTML = (colorArray[i])
        };
    };
};
// key press event handelers
window.addEventListener('keydown', (number) =>{
    console.log(number.key)
    console.log(n)
    for (let i=0; i<liArray.length; i++){

        if (number.key == (i +1) && number.key != 7){
            document.body.style.backgroundColor = colorArray[i]; 
            document.getElementById('color-heading').innerHTML = (colorArray[i]) 
        }
    }
});

// hover menu event handelers

hamburger.addEventListener('mouseenter', function(){
        dropdown.style.margin = '30px 0px 0px -10px';
});
hamburger.addEventListener('mouseleave', function(){
    dropdown.style.margin = '30px 0px 0px -150px';
});
dropdown.addEventListener("mousedown", function(){
    dropdown.style.margin = '30px 0px 0px -150px';
})









