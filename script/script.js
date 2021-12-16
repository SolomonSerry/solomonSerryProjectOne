// Want to create a feature that has the menu bar toggle in and out from the right sided as you click the hamburger menu, also have the hamburger menu icon switch to and 'x' went the menu is out and switch back to the hamburger once the menu slides back in.

// namespacing
const textileeApp = {};

// init function
textileeApp.init = function() {
  textileeApp.slidingNavMenu();
};

// create nav sliding function
textileeApp.slidingNavMenu = function() {
  const hMenu = document.querySelector('i');
  
   hMenu.addEventListener('click', function(event){
    const navBar = document.querySelector ('ul');
  
      navBar.classList.toggle('isActive');
      hMenu.classList.toggle('fa-times');
  });
};

textileeApp.init();
