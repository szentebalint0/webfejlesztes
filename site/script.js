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

function kerdoiv() {
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
  }

  document.getElementById('hirleveligen').addEventListener('click', hirlevelInput);
  document.getElementById('hirlevelnem').addEventListener('click', hirlevelInput);

  function hirlevelInput() {

    const igen = document.getElementById('hirleveligen');
    const email = document.getElementById('em');

    email.disabled = !igen.checked;
  };
};

function webshop() {

  const kabat_ar = 7990;
  const tal_ar = 4490;
  const nyakorv_ar = 4990;
  const poraz_ar = 6490;

  let kosara = document.getElementById('kosara');
  let kosarb = document.getElementById('kosarb');
  let kosarc = document.getElementById('kosarc');
  let kosard = document.getElementById('kosard');
  let szallitasosszeg = document.getElementById('szallitasosszeg')
  let vegosszeg = document.getElementById('vegosszeg')

  document.getElementById('gomba').addEventListener('click', myFunc);
  document.getElementById('gombb').addEventListener('click', myFunc);
  document.getElementById('gombc').addEventListener('click', myFunc);
  document.getElementById('gombd').addEventListener('click', myFunc);

  function myFunc() {

    let kabat_db = parseInt(document.getElementById('a').value);
    let tal_db = parseInt(document.getElementById('b').value);
    let nyakorv_db = parseInt(document.getElementById('c').value);
    let poraz_db = parseInt(document.getElementById('d').value);

    if (kabat_db != 0) {
      kosara.innerHTML = `Virágos kutyakabát : ${kabat_db} * ${kabat_ar} Ft.`;
    } else {
      kosara.innerHTML = '';
    }
    if (tal_db != 0) {
      kosarb.innerHTML = `Kutyamintás kutyatál : ${tal_db} * ${tal_ar} Ft.`;
    } else {
      kosarb.innerHTML = '';
    }
    if (nyakorv_db != 0) {
      kosarc.innerHTML = `Franciabulldogos nyakörv : ${nyakorv_db} * ${nyakorv_ar} Ft.`;
    } else {
      kosarc.innerHTML = '';
    }
    if (poraz_db != 0) {
      kosard.innerHTML = `Mintás hám és póráz : ${poraz_db} * ${poraz_ar} Ft.`;
    } else {
      kosard.innerHTML = '';
    }

    let termekek_osszege =
      kabat_db * kabat_ar +
      tal_db * tal_ar +
      nyakorv_db * nyakorv_ar +
      poraz_db * poraz_ar;

    let szallitas = 1990;

    if (termekek_osszege > 10000) {
      szallitas = 0;
    }
    if (termekek_osszege > 0) {
      szallitasosszeg.innerHTML = `Szállítási költség: ${szallitas} Ft`;
      vegosszeg.innerHTML = `Végösszeg: ${termekek_osszege + szallitas} Ft`;
    }
    else {
      szallitasosszeg.innerHTML = '';
      vegosszeg.innerHTML = '';
    }
  };
};