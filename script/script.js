// Want to create a feature that has the menu bar toggle in and out as you click the hamburger menu.

const hMenu = document.querySelector('i');

hMenu.addEventListener('click', function(event){
  const navBar = document.querySelector ('ul');
  

  navBar.classList.toggle('isActive')
  hMenu.classList.toggle('fa-times')
});

