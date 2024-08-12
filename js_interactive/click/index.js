//창의적으로
//index.html의 p 요소를 얻어오고 싶다
//document.children[0][0][0];


//const pElement = document.querySelector('p');
const pElement = document.getElementsByTagName('p')[0];
console.log(pElement);

pElement.addEventListener('click', function(event) {
    console.log(event);
});