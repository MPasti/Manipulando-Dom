const lista = document.querySelector("ul");
const botao1 = document.querySelector("#botao");
const botao2 = document.querySelector(".close");

document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
  botao1.style.display = "none";
  botao2.style.display = "block";
});

//a const list recebe o valor da lista
//lá, o queryselector recebe o primeiro botão e da a ele a função de
//mudar o atributo da lista (data-lista), localizando pelo data attribute para
//mostrar, que são os data atribuites que estão no css
//através dos data-atribute é possível edita-los pelo css

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
  botao1.style.display = "block";
  botao2.style.display = "none";

  //para sumir com o elemento
  //botao2.remove();
  //para adicionar outro elemento já salvo
  //document.querySelector(".botoes").appendChild(botao1);
});
