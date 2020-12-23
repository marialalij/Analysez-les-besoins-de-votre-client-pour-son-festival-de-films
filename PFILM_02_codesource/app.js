  
  const fmenu = document.querySelector('.fmenu');
  const fermerMenu = document.querySelector('.fermerMenu');
  const ouvrirMenu = document.querySelector('.ouvrirMenu');
  ouvrirMenu.addEventListener('click',show);
  fermerMenu.addEventListener('click',close);
  
  function show(){
    fmenu.style.display = 'flex';
    fmenu.style.top = '0';
  }
  function close(){
    fmenu.style.top = '-100%';
  }