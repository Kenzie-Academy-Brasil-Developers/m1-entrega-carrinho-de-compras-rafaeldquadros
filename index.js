const bodyDoHtml        = document.getElementById("bodyHtml")
const mainDoHtml        = document.createElement("main")
const secaoCarrinho     = document.createElement("section")
const listaCarrinho     = document.createElement("ul")
listaCarrinho.id = "idListaCarrinho"
const buttonCarrinho    = document.createElement("button")
const nomeDoCarrinho    = document.createElement("h2")
const liCabecalho       = document.createElement("li")
liCabecalho.id = "cabecalho__lista"
const liCabecalhoItem   = document.createElement("p")
const liCabecalhoPreco  = document.createElement("p")


liCabecalhoItem.innerText = "Item"
liCabecalhoPreco.innerText= "Preço"
liCabecalho.appendChild(liCabecalhoItem)
liCabecalho.appendChild(liCabecalhoPreco)

bodyDoHtml.appendChild(mainDoHtml)
mainDoHtml.appendChild(secaoCarrinho)
secaoCarrinho.appendChild(nomeDoCarrinho)
secaoCarrinho.appendChild(listaCarrinho)
listaCarrinho.appendChild(liCabecalho)
secaoCarrinho.appendChild(buttonCarrinho)


nomeDoCarrinho.innerText = "Virtual Market"
buttonCarrinho.innerText = "Finalizar Compra"



function soma(listaDosProdutos){
    let valorSomado = 0
    for(let i = 0; i < listaDosProdutos.length; i++){
        valorSomado += listaDosProdutos[i]
    }
    return valorSomado
}


let arrDeProdutos = []
let arrDeSoma     = []




function criandoItemDoCarrinho(nome, preco){
    let itemDoCarrinho ={
        nome: nome,
        preco: preco,
    }
    return arrDeProdutos.push(itemDoCarrinho)
}

criandoItemDoCarrinho("Banana","4.50")
criandoItemDoCarrinho("Morango", "10.00")
criandoItemDoCarrinho("Pitaia", "6.00")
criandoItemDoCarrinho("Pera", "8.00")
criandoItemDoCarrinho("Macã", "3.00")
criandoItemDoCarrinho("Goiaba","5.00")



console.log(arrDeProdutos)

function addProdutoCarrinho(obj){
    for(let i = 0; i < obj.length; i++){
        let produtoDoCarrinho = obj[i]
        let card              = criandoTagLi(produtoDoCarrinho)
        console.log(card)
        listaCarrinho.appendChild(card)
        
    } 
}
function criandoTagLi(obj){
    let nome  = obj.nome
    let preco = obj.preco
    arrDeSoma.push(parseFloat(preco))

    let tagLi    = document.createElement("li")
    let tagNome  = document.createElement("p")
    let tagPreco = document.createElement("p")

    tagNome.innerText  = nome
    tagPreco.innerText = `R$ ${preco}`
    
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)
    return tagLi
}


addProdutoCarrinho(arrDeProdutos)
let retornoTotal  = soma(arrDeSoma)
console.log(retornoTotal)
criandoItemDoCarrinho("Total", retornoTotal)


const totalLista = document.createElement("li")
const totalListaTotal = document.createElement("p")
const totalListaPreco = document.createElement("p")

totalListaTotal.innerText = "Total"
totalListaPreco.innerText = `R$ ${retornoTotal}`

totalLista.appendChild(totalListaTotal)
totalLista.appendChild(totalListaPreco)
listaCarrinho.appendChild(totalLista)

