// Array de objetos (Requisito Aula 9)
const filmes = [
  { titulo: "Interestelar", categoria: "Filmes", preco: 10 },
  { titulo: "O Poderoso Chefão", categoria: "Filmes", preco: 10 },
  { titulo: "Breaking Bad", categoria: "Séries", preco: 12 },
  { titulo: "The Last of Us", categoria: "Séries", preco: 12 },
  { titulo: "Duna: Parte 2", categoria: "Lançamentos", preco: 15 },
  { titulo: "Deadpool & Wolverine", categoria: "Lançamentos", preco: 15 }
];

// Função 1: Mostrar cartões na tela de catálogo
function mostrarCatalogo(lista) {
  let caixa = document.getElementById("lista-catalogo");
  let contador = document.getElementById("contador");

  if (caixa) {
    caixa.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
      caixa.innerHTML += `
        <div class="card">
          <h3>${lista[i].titulo}</h3>
          <p>Categoria: ${lista[i].categoria}</p>
          <p><strong>R$ ${lista[i].preco},00 / dia</strong></p>
        </div>
      `;
    }

    contador.innerText = "Mostrando " + lista.length + " de " + filmes.length + " itens";
  }
}

// Função 2: Filtrar catálogo (usando filter)
function filtrarCatalogo(categoria) {
  if (categoria == "Todos") {
    mostrarCatalogo(filmes);
  } else {
    let filtrados = filmes.filter(function(item) {
      return item.categoria == categoria;
    });
    mostrarCatalogo(filtrados);
  }
}

// Função 3: Simulador com regra de 20% a partir de 3 dias
function calcularAluguel(event) {
  event.preventDefault();

  let preco = Number(document.getElementById("item-select").value);
  let dias = Number(document.getElementById("dias-input").value);
  let resultado = document.getElementById("resultado-simulador");

  if (dias < 1) {
    resultado.innerText = "Escolha pelo menos 1 dia.";
  } else if (dias >= 3) {
    let total = preco * dias;
    let desconto = total * 0.20;
    let valorFinal = total - desconto;
    resultado.innerText = "Com 20% de desconto (3 dias ou mais): R$ " + valorFinal;
  } else {
    let total = preco * dias;
    resultado.innerText = "Valor total: R$ " + total;
  }
}

// Função 4: Validação do formulário de cadastro (3 regras)
function validarCadastro(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let idade = Number(document.getElementById("idade").value);
  let categoria = document.getElementById("categoria-fav").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem-cadastro");

  if (nome == "" || email == "" || categoria == "") {
    mensagem.style.color = "red";
    mensagem.innerText = "Preencha todos os campos!";
  } else if (idade < 18) {
    mensagem.style.color = "red";
    mensagem.innerText = "Você precisa ter 18 anos ou mais.";
  } else if (senha.length < 6) {
    mensagem.style.color = "red";
    mensagem.innerText = "A senha precisa ter 6 caracteres ou mais.";
  } else {
    mensagem.style.color = "lightgreen";
    mensagem.innerText = "Cadastro feito com sucesso!";
  }
}

// Chama a função para carregar o catálogo assim que abrir a página
mostrarCatalogo(filmes);