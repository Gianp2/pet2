/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });
        target.classList.add('filters__active');

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active');
        });
        tab.classList.add('filter-tab-active');
    });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
});

// Animaciones secuenciales para el perfil
sr.reveal('.profile__border', { origin: 'top', distance: '40px', delay: 300 });
sr.reveal('.profile__name', { origin: 'top', distance: '30px', delay: 400 });
sr.reveal('.profile__profession', { origin: 'top', distance: '30px', delay: 500 });
sr.reveal('.profile__social', { origin: 'bottom', distance: '20px', delay: 600 });

// Animaciones para botones y filtros
sr.reveal('.profile__buttons', { origin: 'bottom', distance: '20px', delay: 700 });
sr.reveal('.filters__content', { origin: 'top', distance: '30px', delay: 800 });
sr.reveal('.filters', { origin: 'top', distance: '30px', delay: 900 });
sr.reveal('.projects__card', { interval: 200, origin: 'bottom', distance: '30px', delay: 1000 });
sr.reveal('.footer', { origin: 'bottom', distance: '40px', delay: 1100 });
