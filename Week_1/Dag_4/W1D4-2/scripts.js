const button = document.getElementById('mybutton');
const bgButton = document.getElementById('backgroundButton')
const body = document.getElementById('body')

button.addEventListener('click', function(event){
    console.log(event.target)
    alert("button was clicked")
})


bgButton.onclick = function(){
    console.log("Bg button was clicked");

    if (body.className == "blue-background"){
        body.className = "red-background";
    }else {
        body.className = "blue-background";
    }
}