const posts = [
    { title: 'Python', body: 'I am a pythonista' },
    { title: 'Javascript', body: 'I love javascript' }
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000)
}


function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000)
}


const post3 = {
    title: 'Java',
    body: 'Still trying to figure it out'
}

createPost(post3);

getPosts();
