// Optional: Adding hover effect functionality for Shortcut section of Administation main page
document.querySelectorAll('.game').forEach((game) => {
    game.addEventListener('mouseover', () => {
      game.classList.add('active');
    });
  
    game.addEventListener('mouseout', () => {
      game.classList.remove('active');
    });
  });

  // Optional: Log hover events for analytics or interactivity of Administation main page
document.querySelectorAll('.footer-column ul li').forEach((item) => {
    item.addEventListener('mouseenter', () => {
        console.log('Hovered on:', item.innerText);
    });
    item.addEventListener('mouseleave', () => {
        console.log('Mouse left:', item.innerText);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const iconTrack = document.querySelector(".icon-track");
  const icons = iconTrack.innerHTML;

  // Duplicate icons for seamless looping of main page
  iconTrack.innerHTML += icons;
});














































