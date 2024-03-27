/* ************* VARIÁVEIS GLOBAIS ********* */

// Variável de controle do estoque a partir de vendas e compras
let estoque = []; // Este array deve possuir objetos
let usuarios = []; // Este array deve possuir objetos



/* ************* FUNÇÕES ********* */

function cadastrarUsuarios() {

    //Sistema de coleta de dados

    let nomeDoUsuario = prompt('Digite seu nome para o cadastro: ') //Nome do usuário
    let cpf = parseInt(prompt('Digite seu CPF para cadastro: ')) //CPF do usuário que logo será validado
    let email = prompt('Digite um email para cadastro: ') //Email do usuário que logo será validado
    let senha = prompt('Digite uma senha para cadastro: ') //Senha do usuário
    let cargo = parseInt(prompt('Digite o número respectivo ao seu cargo:\n1 - Cliente\n2 - Zelador\n3 - Atendente\n4 - Estoquista\n5 - Balconista\n6 - Gerente')) //Cargo do usuário que logo será validado
    
    //Sistema de validação
    
    function validarCPF(x){ //Dizer se o CPF é um CPF válido ou não
    x = x.replace(/[^\d]/g, ''); //Remover quaisquer caracteres para filtrar o número do CPF
     if (x.length > 11 || x.length < 11 || /^(.)\1+$/.test(x)){ //Um CPF possui 11 dígitos, algo diferente disso não seria um CPF
        alert('CPF inválido, cadastre novamente!') //Mensagem exibida caso o CPF seja inválido
        cadastrarUsuarios() //Repete toda a operação caso o CPF seja inválido
     }
    }

    function validarEmail(y){ //Dizer se o email é um email válido ou não
    if (y.includes('@') == false){ //Caso não contenha "@", é um email inválido
        cadastrarUsuarios() //Repete toda a operação caso o email seja inválido
    }
    if (y.includes('.') == false){  //Caso não contenha ".", é um email inválido
        cadastrarUsuarios() //Repete toda a operação caso o email seja inválido
    }
    }

    switch (z) {
        case 1:
            cargo = 'Cliente';
            break;
        case 2:
            cargo = 'Zelador';
            break;
        case 3:
            cargo = 'Atendente';
            break;
        case 4:
            cargo = 'Estoquista';
            break;
        case 5:
            cargo = 'Balconista';
            break;
        case 6:
            cargo = 'Gerente';
            break;
        default:
            cargo = 'Indefinido';
            break;
    }

    validarCargo(cargo)
    validarCPF(cpf)
    validarEmail(email)

    let usuario = { 
      nome: nomeDoUsuario, 
      cpf: cpf, 
      email: email, 
      senha: senha, 
      cargo: cargo 
      }
      usuarios.push(usuario)
    /* 
       Aqui vocês implementam o código referente a função 
    */
}

function listarUsuarios() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function removerUsuario() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function alterarDadoUsuario() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

function logarUsuario() {
    /* 
       Aqui vocês implementam o código referente a função
       Usar IFs para verificar se o e-mail e senha estão corretos.
    */
}

/* Produto / Usuário */

//função para corrigir o quot
function nomesemquot(nome) {
    return nome.replace(/\\?\"/g, '');
}

//função para adicionar um novo filme ao estoque
function adicionarProduto() {
    //solicita ao usuario o nome do filme a ser adicionado
    let nome = prompt("Digite o nome do Filme que você vai adicionar ao estoque");
    //solicita ao usuario a quantidade de filmes a serem adicionados
    let quantidade = parseInt(prompt("Digite a quantidade de filmes que serão adicionados ao estoque"));
    //solicita ao usuario o periodo de aluguel do filme no estoque
    let validade = prompt("Digite o periodo de aluguel do filme no estoque");

    //um novo objeto para representar o filme
    let novoProduto = {
        nome: nome, //nome do filme
        quantidade: quantidade, //quantidade de filmes
        validade: validade //periodo de aluguel
    };

    //adiciona o novo filme ao estoque
    estoque.push(novoProduto);
}

//função para consultar o tempo de aluguel de um filme especifico
function validadeIndividual() {
    //solicita ao usuario o nome do filme para consultar seu tempo de aluguel
    let nome = prompt("Digite o nome do Filme para consultar seu tempo de aluguel:");
    //procura o filme no estoque pelo nome fornecido
    let produto = estoque.find(item => item.nome === nome);
    //se o filme for encontrado, exibe seu periodo de aluguel SE NÃO informa que não possui o mesmo no estoque
    if (produto) {
        console.log(`A validade do Filme "${nomesemquot(produto.nome)} alugado é ${produto.validade}`);
    } else {
        console.log("Filme não encontrado no estoque")
    }
}

//função para imprimir um relatorio de validades de todos os filmes no estoque
function imprimirRelatorioValidades() {
    console.log("Relatório de Validades:");
    console.log("Quantidade de produtos no estoque:", estoque.length);
    //itera(repete) todos os produtos no estoque e mostra o nome e a validade de cada um
    estoque.forEach(produto => {
        console.log(`Nome do Filme: ${nomesemquot(produto.nome)}, Validade: ${produto.validade}`)
    });
}

//função para remover um filme do estoque
function removerProduto() {
    //solicita ao usuário o nome do filme que deseja remover
    let nome = prompt("Digite o nome do Filme que deseja remover:");
    //encontra o indice do filme no estoque
    let index = estoque.findIndex(produto => produto.nome === nome)
    //Se o filme for encontrado vai de arrasta SE NÃO avisa que não tem o mesmo no estoque
    if (index !== -1) {
        estoque.splice(index, 1);
        console.log("Filme removido");
    } else {
        console.log("Infelizmente não temos o seu Filme no estoque")
    }
}

//função para atualizar a quantidade de um filme no estoque
function atualizarQuantidade() {
    //pede ao usuário o nome do filme para atualizar sua quantidade
    let nome = prompt("Digite o nome do filme para atualizar sua quantidade:");
    //agora a nova quantidade do mesmo filme
    let quantidade = parseInt(prompt("Digite a nova quantidade do filme:"));

    //encontra o produto no estoque pelo nome 
    let produto = estoque.find(item => item.nome === nome);
    //se o produto for encontrado atualiza sua quantidade SE NÃO retorna que o mesmo não foi encontrado
    if (produto) {
        produto.quantidade = quantidade;
        //esse comando foi pq tava saindo com um tal de quot no console
       
        console.log(`Quantidade do produto "${nomesemquot(nome)}" atualizada para ${quantidade}`)
    } else {
        console.log("Seu Filme não foi encontrado no estoque")
    }
}

function cadastrarFornecedor() {
    let nomeDaEmpresa = prompt('Nome: ')
    let cnpj = parseInt(prompt('CNPJ: '))
    let email = prompt('Email: ')
    let telefone = parseInt(prompt('Telefone: '))
    let produtos = [];
    let fornecedor = { nomeDaEmpresa, cnpj, email, telefone, produtos };
    fornecedores.push(fornecedor);
       //Aqui vocês implementam o código referente a função 
    


function listarFornecedores() {
    console.log(`Lista de Fornecedores:`)
    for (let i = 0; i < 3; i++)
    console.log(`Nome: ${nomeDaEmpresa[i]}, ${cnpj[i]}, ${email[i]}, ${telefone[i]}`)   

/*
function email(y){ //Dizer se o email é um email válido ou não
    if (y.includes('@') == false){ //Caso não contenha "@", é um email inválido
        listarFornecedores() //Repete toda a operação caso o email seja inválido
    }
    if (y.includes('.') == false){  //Caso não contenha ".", é um email inválido
        listarFornecedores() //Repete toda a operação caso o email seja inválido
    }
*/    


       //Aqui vocês implementam o código referente a função
       //Usar IFs para verificar se o e-mail e senha estão corretos.
    
}

function removerFornecedor(nomeDaEmpresa) {
    if (empresas.hasOwnProperty(nomeDaEmpresa)) {
        delete empresas[nomeDaEmpresa];
    console.log(`Fornecedor ${nomeDaEmpresa} removido com sucesso.`);
    } else {
        console.log(`Fornecedor ${nomeDaEmpresa} não encontrado.`);
    }
    
       //Aqui vocês implementam o código referente a função
       //Usar IFs para verificar se o e-mail e senha estão corretos.
    
}


/*  --------- SEQUÊNCIA DE VALIDAÇÃO E TESTE DO CÓDIGO --------- */


console.log('******+++*******');
console.log('Sistema de controle de estoque');
console.log('******+++*******');

// /* 01 - Processo de cadastro de 6 usuários */
// for (let i = 0; i < 6; i++) {
//     cadastrarUsuarios();
// }

// /* 02 - Listar todos usuários cadastrados, com todas informações */
// listarUsuarios();

// /* 03 - Remover 1 dos usuários, qualquer um deles e depois listar novamente eles
//         para ver se o usuário foi removido. */
// removerUsuario();
// listarUsuarios();

// /* 04 - Alterar algum dado do usuário */
// alterarDadoUsuario();

// /* 05 - Fazer login com um dos usuários cadastrados */
// logarUsuario();

// /* 06 - Cadastrar pelo menos 15 produtos */
// adicionarProduto();

// /* 07 - Consultar validade individualmente de um produto */
// validadeIndividual();

// /* 08 - Consultar validade de todos os produtos em formato relatório */
// imprimirRelatorioValidades();

// /* 09 - Remover pelo menos 5 produtos */
// removerProduto();

// /* 10 - Atualizar a quantidade de pelo menos 5 produtos */
// atualizarQuantidade();

// /* 11 - Cadastrar fornecedor, no minimo 3 */
 cadastrarFornecedor();
 console.log(cadastrarFornecedor);

// /* 12 - Listar fornecedores */
 listarFornecedores();
 console.log(listarFornecedores);
// /* 13 - Remover 1 fornecedor e depois imprimir a lista completa */
 removerFornecedor();
 listarFornecedores();
 console.log(removerFornecedor);
 console.log(listarFornecedores);
}
