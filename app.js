/* ************* VARIÁVEIS GLOBAIS ********* */

// Variável de controle do estoque a partir de vendas e compras
let estoque = []; // Este array deve possuir objetos
let usuarios = []; // Este array deve possuir objetos



/* ************* FUNÇÕES ********* */

function cadastrarUsuarios() {

    //Sistema de coleta de dados

    let nomeDoUsuario = prompt('Digite seu nome: ') //Nome do usuário
    let cpf = parseInt('Digite somente os números de seu CPF para seu cadastro: ') //CPF do usuário que logo será validado
    let email = prompt('Digite um email para seu cadastro: ') //Email do usuário que logo será validado
    let senha = prompt('Digite uma senha para seu cadastro: ') //Senha do usuário
    let cargo = parseInt(prompt('Digite o número respectivo ao seu cargo:\n1 - Cliente\n2 - Zelador\n3 - Atendente\n4 - Estoquista\n5 - Balconista\n6 - Gerente')) //Cargo do usuário que logo será validado
    //Sistema de validação

    function validarCPF(x){ //Dizer se o CPF é um CPF válido ou não
     if (x.length > 11 || x.length < 11){ //Um CPF possui 11 dígitos, algo diferente disso não seria um CPF
        console.log('CPF inválido, cadastre novamente!') //Mensagem exibida caso o CPF seja inválido
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

    function validarCargo(z){
        
    }

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

function adicionarProduto() {
    let produto = prompt("Digite o nome do Filme que você vai adicionar ao estoque");
    estoque.push(produto);  //o push vai servir para jogar na variavel estoque
}
       //Aqui vocês implementam o código referente a função 
    


function validadeIndividual() {
    let nome = prompt("Digite o nome do Filme para consultar sua validade:");
    let produto =  estoque.find(item => item.nome === nome)

    
    
       //Aqui vocês implementam o código referente a função 
    
}

function imprimirRelatorioValidades() {
    
       //Aqui vocês implementam o código referente a função 
    
}

function removerProduto() {
    let nome = prompt("Digite o nome do Filme que deseja remover:");
        let index = estoque.indexOf(nome) 
        if (index !== -1) {
            estoque.splice(index, 1);
            console.log("Filme Removido com sucesso")
        } else {
            console.log("Sinto muito o Filme não foi encontrado no estoque")
        }
     }   
       //Aqui vocês implementam o código referente a função 


function atualizarQuantidade() {
    let nome = prompt("Digite o nome do produto para atualizar sua quantidade:");
    let quantidade = parseInt(prompt("Digite a nova quantidade do produto:"));

    
       //Aqui vocês implementam o código referente a função 
    
}

function cadastrarFornecedor() {
    let nomeDaEmpresa;
    let cnpj;
    let email;
    let telefone;
    let produtos = [];
    
       //Aqui vocês implementam o código referente a função 
    
}

function listarFornecedores() {
    
       //Aqui vocês implementam o código referente a função
       //Usar IFs para verificar se o e-mail e senha estão corretos.
    
}

function removerFornecedor() {
    
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
// cadastrarFornecedor();

// /* 12 - Listar fornecedores */
// listarFornecedores();

// /* 13 - Remover 1 fornecedor e depois imprimir a lista completa */
// removerFornecedor();
// listarFornecedores();

