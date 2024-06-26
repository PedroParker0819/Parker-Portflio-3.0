function removeLoadingScreen() {
  const loadingScreen = document.querySelector('.loading');
  loadingScreen.classList.add('fade-out');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000); // Define o tempo em milissegundos (aqui, 1 segundo)
}

window.addEventListener('load', () => {
  removeLoadingScreen();
});

window.addEventListener('beforeunload', () => {
  const loadingScreen = document.querySelector('.loading');
  loadingScreen.style.display = 'flex';
});

function writeTitle(){
  function activeWorld(element){
      const arrText = element.innerHTML.split('');
      element.innerHTML = '';
      arrText.forEach((letra, i) =>{
          setTimeout(()=>{
              element.innerHTML += letra;
          }, 75 * i);
      })
  }
  const title = document.querySelector('.digitando');
  activeWorld(title);
}
writeTitle();

window.onload = function() {
  const vlibrasScript = document.createElement('script');
  vlibrasScript.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  document.head.appendChild(vlibrasScript);
  
  vlibrasScript.onload = function() {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
};
