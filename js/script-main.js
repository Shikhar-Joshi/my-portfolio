let theme = localStorage.getItem('theme');

if(theme == null) {
    console.log("if null");
    setTheme('white');
}
else {
    setTheme(theme);
}
let themeDots = document.getElementsByClassName('theme-dot');

let themeLen = themeDots.length;
for(let i = 0; i < themeLen; i++) {
    themeDots[i].addEventListener('click', () =>{
        let theme = themeDots[i].dataset.theme;
        setTheme(theme);
    })
}

function setTheme(theme){
    if(theme == 'white')
        document.getElementById('theme-style').href = 'css/style.css';

    if(theme == 'blue')
        document.getElementById('theme-style').href = 'css/blue.css';

    if(theme == 'green')
        document.getElementById('theme-style').href = 'css/green.css';

    if(theme == 'purple')
        document.getElementById('theme-style').href = 'css/purple.css';

    localStorage.setItem('theme', theme);
};
