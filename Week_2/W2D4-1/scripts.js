 

const bigFiveLi = document.getElementById('button-list').getElementsByClassName('big-five-list')[0].getElementsByTagName("li");
let clickedButton = '';
const seenAnimals = document.getElementById('spotted-animals-list');

const addAnimalToList = () => {
    const newLi = document.createElement('li');
    seenAnimals.appendChild(newLi)
    newLi.innerText = clickedButton;
}

const removeFirst = () => {
    let child = seenAnimals.getElementsByTagName('li')[0];
    seenAnimals.removeChild(child)
}

// 1. Maak een eventlistener vast aan de buttons
Array.from(bigFiveLi).forEach(liHtml => {
    liHtml.onclick= () =>{
        clickedButton = liHtml.querySelector('.big-five-button').textContent;
        addAnimalToList();
    }
});

// event listener for remove first 
document.getElementById('remove-first-item-button').onclick = () => {
    removeFirst();
}
// remove all button
document.getElementById('remove-all-button').onclick = () => {
    Array.from(seenAnimals.getElementsByTagName('li')).forEach(li => {
        removeFirst();
    })
}

