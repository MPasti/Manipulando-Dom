function mudarTexto() {
  document.querySelector("#texto").innerText = "Teste";
}

var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];

lista.splice(1, 1);

console.log(lista);

const trono = document.querySelector(".trono");
const aff = document.querySelector(".botao");
const valor = document.querySelector("#texto");

aff.onclick = mudarTexto;

trono.onclick = () => {
  valor.innerHTML = "fui clicado!!";
};

//podemos adicionar ela dentro da função anonima, dependendo evita bugs
//aff.onclick = function (){
//mudarTexto;
//};

/* é possível criar uma função anonima de cara
aff.onclick = function () {
  document.querySelector("#texto").innerText = "Teste";
};
*/
