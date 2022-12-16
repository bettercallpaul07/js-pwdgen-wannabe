const nome = prompt('Come ti chiami?');
const surname = prompt('Qual è il tuo cognome?');
const color = prompt('Qual è il tuo colore preferito?');
let password = nome + surname + color + '21';
document.getElementById('passwordid').innerHTML = password ;
