
const API_KEY = "e2fb0c0cc10d2b23433f6727de6913da"
const getData = async () => {
    try {
        const urlLink = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        const res = await fetch(urlLink, {method: 'GET'});
        const data = await res.json();
        console.log("the Data in get Data function json", data)
        return data;
    } catch (error){
        console.log(error);
    }
}

getData();