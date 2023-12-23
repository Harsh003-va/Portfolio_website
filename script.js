function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


  
//   // Close the menu when a link is clicked (optional)
//   var menuLinks = document.querySelectorAll('.menu a');
//   menuLinks.forEach(function(link) {
//     link.addEventListener('click', function() {
//       var menu = document.querySelector('.menu');
//       menu.style.display = 'none';
//     });
//   });
  