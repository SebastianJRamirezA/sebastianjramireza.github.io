document.addEventListener('DOMContentLoaded', () => {
  // Dark Mode Toggle
  const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
  const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
  const sunIconClass = 'fa-sun text-yellow-400';
  const moonIconClass = 'fa-moon text-indigo-400';

  const applyDarkMode = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      darkModeToggleDesktop.innerHTML = `<i class="fas ${sunIconClass}"></i>`;
      darkModeToggleMobile.innerHTML = `<i class="fas ${sunIconClass}"></i>`;
    } else {
      document.documentElement.classList.remove('dark');
      darkModeToggleDesktop.innerHTML = `<i class="fas ${moonIconClass}"></i>`;
      darkModeToggleMobile.innerHTML = `<i class="fas ${moonIconClass}"></i>`;
    }
  };

  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
    applyDarkMode(isDarkMode);
  };

  darkModeToggleDesktop.addEventListener('click', toggleDarkMode);
  darkModeToggleMobile.addEventListener('click', toggleDarkMode);

  // Check local storage or system preference for dark mode
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    applyDarkMode(true);
  } else if (savedMode === 'false') {
    applyDarkMode(false);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyDarkMode(true);
  } else {
    applyDarkMode(false); // Default to light mode if nothing is set
  }


  // Mobile Menu
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');

  if (mobileMenuButton && mobileMenu && mobileMenuIcon) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden');
      mobileMenuButton.setAttribute('aria-expanded', String(!isOpen));
      if (isOpen) {
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
      } else {
        mobileMenuIcon.classList.remove('fa-bars');
        mobileMenuIcon.classList.add('fa-times');
      }
    });

    // Close mobile menu when a link is clicked
    const mobileNavLinks = mobileMenu.querySelectorAll('.nav-link-mobile');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuIcon.classList.remove('fa-times');
        mobileMenuIcon.classList.add('fa-bars');
      });
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
