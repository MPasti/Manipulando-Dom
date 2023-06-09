const clicar = document.querySelector(".robo");
const clique = document.querySelector(".producao");

const braco = document.querySelector("#braço");

const estatistica = document.querySelectorAll("[data-estatistica]");
//para selecionar todos os elementos que coloquei esse data at tribute

//o onclick do html manda a cor para modificar
function trocaImagem(cor) {
  document.querySelector(".robo").src = `img/Robotron - ${cor}.png`;
}

//como é um array, podemos maipular a localização dos controles para poder reduzir o tamanho da função
const controle = document.querySelectorAll("[data-controle]");
//todos os elementos de controle sao filhos da classe controle, então podemos interagir com o filho

//document.querySelector(".producao").addEventListener("click", dizerOi);
//o event listener recebe dois parametros, a forma de chama-lo e a função que vai ser executada

//aff = () => {
//
//}
//isso se trata de uma decação de função

//isso é um objeto que gera a lógica do robo
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    //todo click retorna um evento, nesse evento está a situação (pointerEvent)
    //ao ler o evento no console, podemos ver que dentro há as caracteristicas dele, uma delas é o target
    //event.target nos mostra onde foi clicado
    //mas todos os botões possuem + ou -, isso conflita, etão precisamos separa-los pelo array
    //parent node é para buscar pelo elemento pai

    AtualizaEstatistica(event.target.dataset.peca);
  });
});

//eventos para mexer na qantia de braços
/*
somar.addEventListener("click", () => {
  manipulaDados("somar");
});
*/
//precisa ser parseInt pq o valor padrão é ocmo string, se adicionar 1 string não vai ficar certo
/*
subtrair.addEventListener("click", () => {
  manipulaDados("subtrair");
});
*/

/*clicar.onclick = () => {
  alert(`olá`);
};
*/
clique.addEventListener("click", () => {
  dizerOi("Pedro");
});

/*
clique.onclick = () => {
    dizerOi('pedro');
};
*/

function dizerBemVindo(nome) {
  console.log("boas vindas", nome);
}

function dizerOi(nome) {
  console.log(nome);
}

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  //agora não é mais no html inteiro, é só dentro do pai
  //pois cada controle tem sua div pai diferente, isso separa o + e -
  //agora todos funcionam perfeito

  console.log(controle);

  if (operacao === "-") {
    if (peca.value > 0) {
      peca.value = parseInt(peca.value) - 1;
    }
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

//função para quando adicionar uma peça, mudar a estatistica do robo
function AtualizaEstatistica(peca) {
  //assim percorremos as estatisticas e pegando os valores

  //ao clicar em cada elemento, ele atualiza o text content com o valor atual com o mesmo text content com
  //parseInt e somar com a posição da peça escolhida e no elemento do dataset
  estatistica.forEach((elemento) => {
    console.log(elemento.dataset.estatistica);
    elemento.textContent =
      parseInt(elemento.textContent) +
      pecas[peca][elemento.dataset.estatistica];
  });
}

dizerBemVindo("Pedro");
