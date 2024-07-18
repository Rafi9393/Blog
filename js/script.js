document.addEventListener("DOMContentLoaded", () => {
    const posts = [
        { title: "First Post", description: "This is the first post." },
        { title: "Second Post", description: "This is the second post." },
        { title: "Third Post", description: "This is the third post." },
    ];

    const postContainer = document.getElementById("post-container");

    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.className = "col-md-4";
        postCard.innerHTML = `
            <div class="card bg-secondary mb-3">
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.description}</p>
                    <a href="view.html" class="btn btn-primary">View</a>
                    <a href="edit.html" class="btn btn-warning">Edit</a>
                    <a href="delete.html" class="btn btn-danger">Delete</a>
                </div>
            </div>
        `;
        postContainer.appendChild(postCard);
    });
});
