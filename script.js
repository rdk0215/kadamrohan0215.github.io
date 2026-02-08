(function () {
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const year = document.getElementById('year');


if (year) year.textContent = new Date().getFullYear();


const stored = localStorage.getItem('theme');
if (stored === 'light' || stored === 'dark') {
root.setAttribute('data-theme', stored);
}


function currentTheme() {
return root.getAttribute('data-theme') || 'dark';
}


function setTheme(next) {
root.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
if (themeBtn) themeBtn.querySelector('.icon').textContent = next === 'light' ? '☀' : '☾';
}


if (themeBtn) {
themeBtn.addEventListener('click', () => {
setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
});
}


// init icon
if (themeBtn) {
themeBtn.querySelector('.icon').textContent = currentTheme() === 'light' ? '☀' : '☾';
}
})();
