const DARK_THEME = {
    color: 'dark',
    navBackgroundColor: 'rgb(0 0 0 / 50%)',
    textBackgroundColor: 'rgb(255 255 255 / 50%)',
    textContent: 'Dark Mode',

}
const LIGHT_THEME = {
    color: 'light',
    navBackgroundColor: 'rgb(255 255 255 / 50%)',
    textBackgroundColor: 'rgb(0 0 0 / 50%)',
    textContent: 'Light Mode',
}

const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Toggle dark/light images
function imageModeToggle(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(theme) {
    isLight = theme === LIGHT_THEME;

    document.documentElement.setAttribute('data-theme', theme.color);
    nav.style.backgroundColor = theme.navBackgroundColor;
    textBox.style.backgroundColor = theme.textBackgroundColor;
    toggleIcon.children[0].textContent = theme.textContent;
    isLight ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageModeToggle(theme.color);
}

// Switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(DARK_THEME);
    } else {
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(LIGHT_THEME);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
}