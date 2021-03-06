'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
  selectNavItem(target);
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', event => {
  scrollIntoView('#contact');
});

// Handle click on "logo" button on navbar
const navbarLogo = document.querySelector('.navbar__logo');
navbarLogo.addEventListener('click', event => {
  scrollIntoView('#home');
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  // Remove selection from the previous item and select the new one
  const active = document.querySelector('.category__btn.selected');
  active.classList.remove('selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
  target.classList.add('selected');

  //
  projectContainer.classList.add('anim-out'); // animation?????? ?????? ??????
  setTimeout(() => {
    projects.forEach(project => {
      // ????????? ???
      if (filter === '*' || project.dataset.type.includes(filter)) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });

    projectContainer.classList.remove('anim-out'); // ?????? ???????????? ???????????????
  }, 300);
});

// 1. ?????? ?????? ???????????? ?????? ??????????????? ????????? ??????
// 2. IntersectionObserver??? ???????????? ?????? ???????????? ????????????.
// 3. ???????????? ????????? ???????????? ?????? ???????????? ????????? ?????????.

// 1.
const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
// console.log(sections);

const navItems = sectionIds.map(id =>
  document.querySelector(`[data-link="${id}"]`),
);
// console.log(navItems);

// 2.
let selectedNavIndex = 0;
let selectedNavItem = navItems[0];

function selectNavItem(selected) {
  // ?????? ????????? ???????????? menu??? active
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

function scrollIntoView(selector) {
  // selector : id (ex. #home, #about, ...)
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerOptions = {
  root: null, // viewport
  rootMargin: '0px',
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    // console.log(entry.target);
    // console.log(entry.boundingClientRect.y); // viewport???????????? ??????????????? 0,0??? y?????? viewport(0, 0)?????? + ?????? - ?????? ??????
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      // ?????? ?????? ?????? ??? (?????? ?????? ???)
      const index = sectionIds.indexOf(`#${entry.target.id}`);

      if (entry.boundingClientRect.y < 0) {
        // ???????????? ????????? ??? - ?????? ???????????? ???????????? ??????
        selectedNavIndex = index + 1;
      } else {
        // ???????????? ?????? ???
        selectedNavIndex = index - 1;
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
  // console.log('????????????', window.scrollY);
  // console.log('?????????', window.scrollY + window.innerHeight);
  // console.log('????????????', document.body.clientHeight);
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if (
    Math.ceil(window.scrollY + window.innerHeight + 10) >=
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1;
  }
  selectNavItem(navItems[selectedNavIndex]);
});
