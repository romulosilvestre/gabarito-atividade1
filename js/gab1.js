//Pegando o formulário
const frm = document.querySelector("form")  

//Pegando o img
const imUnidade= document.querySelector("#imgUnidade")

//Pegando o título
const dvTitulo = document.querySelector("#divTitulo")


//Função para trocar de unidade
const trocarUnidade= () => {
  let unidade                           // variável que irá receber o nome do clube

  if (frm.rbBrasilia.checked) {         // verifica qual radiobutton está selecionado
    unidade = "Brasilia"
  } else if (frm.rbSobradinho.checked) {
    unidade = "Sobradinho"
  } else if(frm.rbGama.checked){
    unidade = "Gama"
  }else{
    unidade ="Taguatinga"
  }

  // define as classes de dvTitulo: row e cores da unidade
  dvTitulo.className = `row cores-${unidade}`

  // modifica a imagem de acordo com a seleção do cliente
  imUnidade.src = `img/${unidade.toLowerCase()}.jpg`
  imUnidade.className = "img-fluid"        // muda o estilo para exibir a imagem
  imUnidade.alt = `Símbolo do ${unidade}`    // modifica atributo alt

  localStorage.setItem("unidade", unidade)   // salva no navegador a escolha do cliente
}

// associa ao evento change de cada botão do form a função trocarUnidade  
frm.rbBrasilia.addEventListener("change", trocarUnidade)   
frm.rbSobradinho.addEventListener("change", trocarUnidade)   
frm.rbTaguatinga.addEventListener("change", trocarUnidade) 
frm.rbGama.addEventListener("change", trocarUnidade) 


//Função vai usar o getItem para verificar a unidade
const verificarUnidade = () => {
  if (localStorage.getItem("unidade")) {           // se já estiver salvo algum clube
    const unidade = localStorage.getItem("unidade")  // obtém o nome do clube

    if (unidade == "Brasilia") {                     // conforme o clube, marca checked 
      frm.rbBrasilia.checked = true
    } else if (unidade == "Sobradinho") {
      frm.rbSobradinho.checked = true
    } else if(unidade = "Gama"){
      frm.rbGama.checked = true
    }else{
      frm.rbTaguatinga.checked = true
    }
    trocarUnidade()                          // chama function que troca imagem e cores
  }
}
// ao carregar a página, verifica se cliente já selecionou unidade anteriormente
window.addEventListener("load", verificarUnidade)
