let produtos = [
  { produto: "camisa preta", preco: 99.99 },
  { produto: "bone preto", preco: 159.90 },
  { produto: "moleton", preco: 199.00 },
  { produto: "jaqueta couro", preco: 399.00 }
];

let carrinho = [];

function adicionarProduto(nomeProduto) {
  // O .find() vai buscar na lista de produtos o item que tem o mesmo nome
  let itenEncontrado = produtos.find(item => item.produto === nomeProduto);

  if (itenEncontrado) {
    carrinho.push(itenEncontrado);
    console.log(`${nomeProduto} foi adicionado ao carrinho!`);
  } else {
    // Se o itenEncontrado for undefined (não existir na lista)
    console.log(`Produto não encontrado!`);
  }
}

function calcularTotal() {
  // Lembre-se, quando um loop for trabalhar com total, sempre começará em 0;

  let mostrarTotal = document.getElementById('texto-total').innerText

  let total = 0;
  // 
  for (let item of carrinho) {
    // Soma o preço do item atual ao total acumulado
    total += item.preco;
  }

  const elementoTotal = document.getElementById('texto-total');
  elementoTotal.innerText = `O valor total do carrinho é: R$ ${total.toFixed(2)}`;



}

adicionarProduto("camisa preta")
adicionarProduto("bone preto")
adicionarProduto("moleton")
adicionarProduto("jaqueta couro")

calcularTotal()


// Captura todos os botões que têm o sobrenome 'btn-adicionar'
const botoes = document.querySelectorAll('.btn-adicionar');

// Para CADA botao que existe dentro dessa lista de botoes...
botoes.forEach(botao => {

  // Aqui dentro nós vamos escutar o clique de cada um deles!
  botao.addEventListener('click', function () {
    // Captura o nome do produto do botão clicado
    let produtoClicado = botao.dataset.produto;

    // Chama a função que criamos no primeiro dia passando esse nome!
    adicionarProduto(produtoClicado);

    calcularTotal()

  })


});

document.body.style.backgroundColor = "#106EBE";
document.body.style.textAlign = "center";






