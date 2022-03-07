let imported = document.createElement('script');
imported.src = 'jquery.js';
document.head.appendChild(imported); 

let h1 = document.createElement('h1')
h1 = document.getElement('h1').innerHTML = 'Teste 1'

$('h1').html('A biblioteca ta funcionando!')