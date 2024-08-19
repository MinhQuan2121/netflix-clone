document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.dropdownToggle');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const button = toggle.querySelector('button');
      const menu = toggle.nextElementSibling;

      // Determine if the clicked FAQ is already expanded
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other dropdowns
      toggles.forEach((otherToggle) => {
        if (otherToggle !== toggle) {
          const otherButton = otherToggle.querySelector('button');
          const otherMenu = otherToggle.nextElementSibling;

          // Set aria-expanded to false and hide other dropdowns
          otherButton.setAttribute('aria-expanded', 'false');
          otherMenu.setAttribute('aria-expanded', 'false');

          // Toggle icons for other dropdowns
          const otherIconPlus = otherButton.querySelector('.iconPlus');
          const otherIconMinus = otherButton.querySelector('.iconMinus');
          otherIconPlus.classList.remove('hidden');
          otherIconMinus.classList.add('hidden');
        }
      });

      // Toggle the current dropdown
      button.setAttribute('aria-expanded', !isExpanded);
      menu.setAttribute('aria-expanded', !isExpanded);

      // Toggle icons for the current dropdown
      const iconPlus = button.querySelector('.iconPlus');
      const iconMinus = button.querySelector('.iconMinus');
      iconPlus.classList.toggle('hidden', isExpanded);
      iconMinus.classList.toggle('hidden', !isExpanded);
    });
  });
});
