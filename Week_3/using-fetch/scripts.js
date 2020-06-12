<<<<<<< HEAD
fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
		.then(data => console.log(data)) 
    .catch(error => {
        console.log(error)
=======
fetch("https://swapi.co/api/people/1/")
    .then(response => response.json())
		.then(data => console.log(data)) 
    .catch(error => {
        console.log(error)
>>>>>>> ddbde54c2d318be8f18a81f211fb6f4b9da7a1a8
    });