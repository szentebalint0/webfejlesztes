const hanyora = document.getElementById('hanyora');
const message = document.getElementById('message');

hanyora.addEventListener('input', uzenet)

function uzenet() {
    const value = parseInt(hanyora.value)
    if (value == 0) {
        message.innerHTML = 'Több játékot a kutyusnak! 🐾';
    } else {
        message.innerHTML = '';
    }
};

document.getElementById('vankutyam').addEventListener('click', toggleInput);
document.getElementById('nincskutyam').addEventListener('click', toggleInput);

function toggleInput() {
  const fajta = document.getElementById('fajta');
  const vankutyam = document.getElementById('vankutyam');
  const hanyora = document.getElementById('hanyora')

  fajta.disabled = !vankutyam.checked;
  hanyora.disabled = !vankutyam.checked;
}

document.getElementById('mennyire').addEventListener('input', mennyire);

function mennyire() {
  let csuszkaertek = document.getElementById('csuszkaertek');
  let ertek = parseInt(document.getElementById('mennyire').value);

  if (ertek <= 20) {
    csuszkaertek.innerHTML = 'Nem szeretem';
  } else if (ertek > 20 && ertek <= 50) {
    csuszkaertek.innerHTML = 'Közömbös vagyok';
  } else if (ertek > 50 && ertek <= 80) {
    csuszkaertek.innerHTML = 'Szeretem';
  } else {
    csuszkaertek.innerHTML = 'Imádom';
  }
};

document.getElementById('hirleveligen').addEventListener('click', hirlevelInput);
document.getElementById('hirlevelnem').addEventListener('click', hirlevelInput);

function hirlevelInput() {

  const igen = document.getElementById('hirleveligen');
  const email = document.getElementById('em');

  email.disabled = !igen.checked;
};