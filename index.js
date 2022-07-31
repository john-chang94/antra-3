// CONSTS
const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_PATH = "posts";

// API
const getPosts = () => {
  const postsUrl = [BASE_URL, POSTS_PATH].join("/");
  return fetch(postsUrl).then((res) => res.json());
};

const getPost = (id) => {
    const postUrl = [BASE_URL, POSTS_PATH, id].join("/");
    return fetch(postUrl).then(res => res.json());
}

// VIEW
const renderContainer = () => `
    <div class="container">
        <header>
            <h1 class="home__header__title">Blog Posts</h1>
        </header>
        <section class="grid"></section>
    </div>
`;

const renderPost = (post) => `
    <header>
        <h3 class="card__title">${post.title}</h3>
    </header>
    <div class="card__body">
        <p class="card__paragraph">${post.body}</p>
    </div>
    <footer>
        <p class="card__footer">Post: #${post.id}</p>
    </footer>
`;

// RUN
const container = renderContainer();
const root = document.querySelector("#root");
root.innerHTML = container;

getPosts().then(data => {
    data.map(post => {
        const postNode = document.createElement("article");
        postNode.className = "card s12 m6 l4 xl3";

        const postCard = renderPost(post);
        postNode.innerHTML = postCard;

        const postsContainer = document.querySelector(".grid");
        postsContainer.appendChild(postNode);
    })
})