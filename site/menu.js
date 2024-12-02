document.getElementById('hamb').addEventListener('click', myMenu);

function myMenu() {

  const nav = document.getElementById('menu');

  if (nav.style.display === '') {
    nav.style.display = 'none';
  }
  if (nav.style.display == 'none') {
    nav.style.display = 'block';
  }
  else {
    nav.style.display = 'none';
  }
};