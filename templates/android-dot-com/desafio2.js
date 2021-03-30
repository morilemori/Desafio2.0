//Desafio 2.0

//CAPTURANDO O ELEMENTO HTML USANDO UM ATRIBUTO AO INVÉS DA CLASSE PARA PRATICAR O USO DO DATA ATTRIBUTE:
var logo = document.querySelector(".android-logo-image");

//ADICIONANDO UM ESCUTADOR NO ELEMENTO DO BOTÃO VIEW SOURCE, QUE AO SER CLICADO IRÁ COLOCAR A VARIÁVEL E O EVENTO NO DATALAYER:
logo.addEventListener('click', function(){

     window.dataLayer = window.dataLayer || [];
       window.dataLayer.push({
          'event': 'seuEvento',
          'eventCategory': 'suaCategoria',
          'eventAction': 'suaAção',
          'eventLabel': 'seuLabel'
  });

})
