const posts = [
    { title: 'Python', body: 'I am a pythonista' },
    { title: 'Javascript', body: 'I love javascript' }
];


function getPosts() {
    setTimeout(() => {
        let output = '<table id="table"><tr><th>Title</th><th>Body</th></tr>';
        posts.forEach((post) => {
            output += `<tr><td>${post.title}</td><td>${post.body}</td></tr>`
        });
        output += '</table>';
        document.body.innerHTML = output;
        document.getElementById('table').classList.add('table', 'table-condensed');
    }, 1000)
}


function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}


const post3 = {
    title: 'Java',
    body: 'And I am still trying to figure out java'
};

createPost(post3, getPosts);
