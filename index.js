const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function loadPosts() {
    for (let i = 0; i < posts.length; i++){
        document.getElementById("posts-container").innerHTML += `
        <div class="post-user-details">
        <img class="post avatar" src="${posts[i]["avatar"]}">
        <div class="name-location">
        <p class="post name b">${posts[i]["name"]}</p>
        <p class="post location">${posts[i]["location"]}</p>
        </div>
        </div>
        <img class="post main-image" src="${posts[i]["post"]}">
        <div class="post footer-section">
        <div class="icons-bar">
        <img class="like icon" src="images/icon-heart.png">
        <img class="comment icon" src="images/icon-comment.png">
        <img class="dm icon" src="images/icon-dm.png">
        </div>
        <p class="likes b">${posts[i]["likes"]} likes</p>
        <p class="caption"><span class="username b">${posts[i]["username"]} </span>${posts[i]["comment"]}</p>
        </div>
        `
    }
}
    
