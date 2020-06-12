const posts = [
    {title: 'Post One', body: 'This is post 1'},
    {title: 'Post two', body: 'This is post 2'},
];

function getPosts () {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
            console.log(output)
        });
        document.body.innterHTML= output;
    }, 1000);
}


const createPost = post => { 
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            post.push(post);
            
            const error = false;

            if(!error){
                resolve();
            } else {
                reject('error : smothing went wrong');
            }
        }, 2000)
    });
}

createPost({title: 'post Three', body: 'This is post three'})
    .then(getPosts);
     