function verify() 
{
 let name = document.querySelector('#name').value;
 let search = document.querySelector('#search').value;
 let result = name.indexOf(search);
 let text = '';
 if (result === -1) {
 text = 'Não achou';
 } else {
 text = 'Achou';
 }
 document.querySelector('#text').innerHTML = text;
}