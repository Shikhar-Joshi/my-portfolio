//local post data
const post = [
    {
        id: 1,
        img: "images/firstProject.png",
        postTitle: 'Entry Management System',
        postIntro: 'Developed this project to store and represent the information of both the Visitor and the Host using Django.',
        link: 'https://github.com/Shikhar-Joshi/Entry-Management-System-Django',
    },
    {
        id: 2,
        img: "images/secondProject.png",
        postTitle: 'Music Player',
        postIntro: 'An application that allows you to listen to music files stored in the devices\'s internal memory. This application was developed using JavaScript.',
        link: 'https://github.com/Shikhar-Joshi/music-player',
    },
    {
        id: 3,
        img: "images/thirdProject.png",
        postTitle: 'A Visual History of Nobel Prize Winners',
        postIntro: 'This project is made to find some insight related to winners of Nobel Prize. It has data from 1901-2016.',
        link: 'https://github.com/Shikhar-Joshi/Nobel-Prize-Winners',
    },
];

//select items
let img = document.querySelector('.thumbnail');
let postTitle = document.querySelector('.post-title');
let postIntro = document.querySelector('.post-intro');
let postWrapper = document.querySelector('.post-wrapper');

// loading data to html
let currentPost = 0;

function displayProjects() {
    let displayData = post.map(function (data) {
        return `
        <div>
            <div class="post">
                <img src=${data.img} alt=${data.postTitle} class="thumbnail" />
                <div class="post-preview">
                    <h6 class="post-title">${data.postTitle}</h6>
                    <p class="post-intro">${data.postIntro}</p>
                    <a href=${data.link} target="_blank">Read More</a>
                </div>
            </div>
        </div>
        `;
    });
    displayData = displayData.join("");
    postWrapper.innerHTML = displayData;
}

window.addEventListener("DOMContentLoaded", function(){
    displayProjects();
});
