function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog/';

    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const posts = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allPosts = {};

    loadBtn.addEventListener('click', loadPosts);

    async function loadPosts() {
        posts.innerHTML = '';

        const response = await fetch(baseUrl + 'posts');
        allPosts = await response.json();

        for (const [key, object] of Object.entries(allPosts)) {

            const option = document.createElement('option');
            option.value = key;
            option.textContent = object.title;
            posts.appendChild(option);
                
        }
        
    };


    viewBtn.addEventListener('click', viewPost);

    async function viewPost() {

        const postId = posts.value;
        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;


        const response = await fetch(baseUrl + 'comments');
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(x => x.postId == postId);

        postComments.innerHTML = '';

        for (const comment of filteredComments) {

            const li = document.createElement('li');
            li.textContent = comment.text;
            postComments.appendChild(li);
        }




        
    }






}

attachEvents();