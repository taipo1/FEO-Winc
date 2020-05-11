


const navig = document.querySelector('#navi');
navig.addEventListener('click', function(){
  
  if (document.getElementById('lijst').className == "lijstjeAan"){
    document.getElementById('lijst').className = "lijstjeUit";
  }else if (document.getElementById('lijst').className =="lijstjeUit"){
    document.getElementById('lijst').className = "lijstjeAan";
  }
})

const grey = document.querySelector('#Grey');
grey.addEventListener('click', function(){
    document.getElemntById('lijst').className="lijstjeUit";
});



/*
const dropLijst = document.querySelector('lijstje')
const burger = document.querySelector('.navi')

burger.addEventListener('mouseenter', functie(){
    dropLijst.style.opa
})

 */