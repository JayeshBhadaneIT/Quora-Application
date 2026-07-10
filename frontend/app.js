const BASE_URL = 'http://localhost:5000';

// Fetch and display spaces
async function fetchSpaces() {
  const response = await axios.get(`${BASE_URL}/spaces`);
  const spaces = response.data;
  const spacesList = document.getElementById('spaces-list');
  spacesList.innerHTML = '';
  spaces.forEach(space => {
    const listItem = document.createElement('li');
    listItem.textContent = space.name;
    spacesList.appendChild(listItem);
  });
}

// Fetch and display posts
async function fetchPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';
  response.data.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `<h4>${post.author}</h4><p>${post.content}</p>`;
    postsContainer.appendChild(postDiv);
  });
}

// Add a question
document.getElementById('submit-question-btn').addEventListener('click', async () => {
  const title = document.getElementById('question-title').value;
  await axios.post(`${BASE_URL}/questions`, { title, author: 'User' });
  alert('Question added!');
  fetchPosts();
});

// Create a space
document.getElementById('create-space-btn').addEventListener('click', async () => {
  const spaceName = prompt('Enter space name:');
  await axios.post(`${BASE_URL}/spaces`, { name: spaceName });
  alert('Space created!');
  fetchSpaces();
});

// Initial Fetch
fetchSpaces();
fetchPosts();
