/* ************* VARIÁVEIS GLOBAIS ********* */

// Variável de controle do estoque a partir de vendas e compras

let estoque = []; // Este array deve possuir objetos
let usuarios = []; // Este array deve possuir objetos

let contadorFormularios = []; //Contará a quantidade de formulários feitos

//Alavancas do Minecraft
let validadorCPF = true //Servirá como um interuptor para auxiliar o código e seus resultados
let validadorEmail = true //Servirá como um interuptor para auxiliar o código e seus resultados
let usuarioApagado = true
let usuarioAlterado = true
let usuarioLogado = false

/* ************* FUNÇÕES ********* */

function cadastrarUsuarios() { //Função para cadastrar um usuário

    //Sistema de coleta de dados

    let nomeDoUsuario = prompt('Digite seu nome: ') //Nome do usuário
    let cpf = prompt('Digite somente os números de seu CPF para seu cadastro: ') //CPF do usuário que logo será validado
    let email = prompt('Digite um email para seu cadastro: ') //Email do usuário que logo será validado
    let senha = prompt('Digite uma senha para seu cadastro: ') //Senha
    let cargo = parseInt(prompt('Digite o número respectivo ao seu cargo:\n1 - Cliente\n2 - Zelador\n3 - Atendente\n4 - Estoquista\n5 - Balconista\n6 - Gerente')) //Cargo do usuário que logo será validado

    //Sistema de validação

    function validarCPF(CPF){ //Dirá se o CPF é válido

        CPF = CPF.replace(/\D/g, "") //Aqui filtram os números, substituindo-os por "", ou seja, apagando-os e transformando-os em tipo "Number"
        
        let CPFString = CPF.toString() //Aqui é criado uma variável que converte "CPF" em string, para que possamos usar funções que não funcionariam com o tipo "Number"
        
        let soma = 0 //Aqui é criado uma variável que será usada posteriormente para um loop
        
        for (let i = 0; i < CPFString.length; i++){ //Criando o loop, temos então o uso da função que não seria possível com o CPF tipo "Number"
        soma += parseInt(CPFString[i]) //Este loop tem como propósito passar de carácter por carácter somando cada um pelo seu sucessor tendo o contador "i" como seu intermédio
        }
        
        let somaString = soma.toString() //Aqui é criado uma variável que converte a variável "soma" em uma "String" para posteriormente ser usado uma função qual somente é válida em strings
        
        if (CPF.length == 11 && somaString[0] == somaString[1]){ //Se o número de caracteres do "CPF" for exatamente igual à 11 e se o primeiro se segundo carácter da soma dos dígitos do CPF, forem exatamente iguais...
        validadorCPF = true //teremos um CPF válido!
        }
        
        else {alert('CPF INVÁLIDO!'), //Caso contrário... Será exibido uma mensagem de "CPF INVÁLIDO!""
            cpf = prompt('Corrija seu CPF: '), //Acompanhado da mensagem, você terá que corrigir seu CPF
            cpf = validarCPF(cpf) //Para que não haja defeito em nosso código, precisamos fazer com que o CPF corrigido, passe novamente pelo validador
            validadorCPF = false //Caso o CPF não seja válido, o validador de CPF será falso
        }
        
        CPF = CPF.slice(0, 3) + '.' + CPF.slice(3, 6) + '.' + CPF.slice(6, 9) + '-' + CPF.slice(9); //Aqui montamos nosso Lego de CPF! Pegando partes do CPF e juntando com caracteres padrões de um CPF, como no caso o "." e o "-"

        return CPF //Precisamos de um resultado depois de toda essa bagunça, vamos pedir para que a função retorne o CPF de volta para nós
    }

    function validarEMAIL(EMAIL){ //Dirá se o EMAIL é válido
        let validador = /\S+@\S+\.\S+/.test(EMAIL); //Aqui é criado uma variável validador que contém um padrão que com a função ".test()", dirá se o email corresponde com o padrão

        if (validador == true) {validadorEmail = true} else { //Se o email é correspondente ao padrão, teremos um email válido! Caso contrário...
            alert('EMAIL INVÁLIDO!') //Assim como na função "validarCPF", teremos uma mensagem indicando ao usuário que o email digitado é inválido
            email = prompt('Corrija seu email: '), //Aqui o usuário deverá preencher novamente o email
            email = validarEMAIL(email) //O email corrigido passará pelo validador
            validadorEmail = false //Caso o email não seja válido, a variável passará a ser "false", indicando que é um email inválido
        }
    }

    function validarCARGO(CARGO){ //Apenas irá adaptar a sua escolha
        switch (CARGO) { //Usando o "switch", reatribuiremos o valor de "cargo" como seu título para que seja exibido no objeto
            case 1:
                CARGO = 'Cliente';
                break;
            case 2:
                CARGO = 'Zelador';
                break;
            case 3:
                CARGO = 'Atendente';
                break;
            case 4:
                CARGO = 'Estoquista';
                break;
            case 5:
                CARGO = 'Balconista';
                break;
            case 6:
                CARGO = 'Gerente';
                break;
            default:
                CARGO = 'Indefinido';
                break;
        }
        return CARGO //E vamos devolver de volta, rs
    }

    cargo = validarCARGO(cargo) //Aqui é reatribuido o valor de cargo para o resultado da validação
    cpf = validarCPF(cpf) //Aqui é reatribuido o valor de CPF para o resultado da validação
    validarEMAIL(email) //Aqui é reatribuido o valor de email para o resultado da validação

    while (validadorCPF == false){ //Neste loop, temos o que faz o nosso 'interruptor de validação' funcionar!
        validarCPF(cpf)} //Enquanto o interruptor ainda for false, toda a estrutura da função de validação se repetirá...

    while (validadorEmail == false){ //Vou poupar explicação... É a mesma coisa do loop acima!
        validarEMAIL(email)}

    contadorFormularios.push(cpf) //Aqui há um meio de contabilizar os formulários feitos! Todo CPF de usuário é diferente, não é?

    id = contadorFormularios.length //Um meio de obter um ID para cada usuário! Enquanto o contadorFormularios vai empurrando CPFs para dentro dele, o ID verificará quantos itens têm dentro do contadorFormularios, gerando um número de formulários feitos, podendo se usar como um ID

    let usuario = {  //Finalmente temos um objeto do usuário!
        id: id,
        nome: nomeDoUsuario, 
        cpf: cpf, 
        email: email,
        senha: senha, 
        cargo: cargo,  
        }
    usuarios.push(usuario) //Vamos empurrar os usuários preenchidos para dentro do array de usuários laaaaa no topo do código
}

function listarUsuarios() { //Aqui é o processo de listagem, listará os usuários criados para o próprio usuário! Usuário analisando usuários

    for (let i = 0; i < usuarios.length; i++) { //Aqui temos um loop qual passará por cada usuário e listará suas informações no console
        console.log(`Nome: ${usuarios[i].nome}\nID: ${i}\nCPF: ${usuarios[i].cpf}\nEmail: ${usuarios[i].email}\nSenha: ${usuarios[i].senha}\nCargo: ${usuarios[i].cargo}`);
    }
}

function removerUsuario() {
    let apagador = parseInt(prompt('Digite o ID do usuário qual deseja apagar: '));
    if (apagador >= 0 && apagador < usuarios.length) {
        usuarios.splice(apagador, 1);
        console.log('Usuário removido com sucesso!');
    } else {
        alert('Usuário não encontrado. Tente novamente!');
        removerUsuario();
        while (usuarioApagado == false){
        removerUsuario()}
    }
}

function alterarDadoUsuario() {
    let alterador = parseInt(prompt('Digite o ID do usuário qual deseja alterar dados: '))
    let dadosUsuario = prompt("Digite o número respectivo ao dado qual deseja alterar:\n1 - Nome\n2 - CPF\n3 - Email\n4 - Senha\n5 - Cargo")
    switch (dadosUsuario) {
        case 1:
            dadosUsuario = prompt("Digite o novo nome:")
            usuarios[alterador].nome = dadosUsuario
            usuarioAlterado = true
            break
        case 2:
            dadosUsuario = prompt("Digite o novo CPF: ")
            usuarios[alterador].cpf = dadosUsuario
            usuarioAlterado = true
            break
        case 3:
            dadosUsuario = prompt("Digite o novo email: ")
            usuarios[alterador].email = dadosUsuario
            usuarioAlterado = true
            break
        case 4:
            dadosUsuario = prompt("Digite a nova senha: ")
            usuarios[alterador].senha = dadosUsuario
            usuarioAlterado = true
            break
        case 5:
            dadosUsuario = prompt("Digite o novo cargo: ")
            usuarios[alterador].cargo = dadosUsuario
            usuarioAlterado = true
            break
        default:
            usuarioAlterado = false
            alterarDadoUsuario()
    }

    while (usuarioAlterado == false){
        alterarDadoUsuario()
    }

    return dadosUsuario
}

function logarUsuario() {
    let meuEmail = prompt("Digite seu email: ")
    let minhaSenha = prompt("Digite sua senha: ")
    for (let i = 0; i > usuarios; i++){
        if (usuarios[i].email == meuEmail && usuarios[i].senha == minhaSenha){
            alert('Usuario Logado')
            alert(`Bem vindo de volta${meuEmail}`)
            usuarioLogado = true
        }
    }
    if (usuarioLogado == false){
        alert('Informações de email ou senha inválidos')
        alert('Tente novamente')
        logarUsuario()
    }
    while (usuarioLogado == false){
        logarUsuario()
    }
    
}

/* Produto / Usuário */

//função para corrigir o quot
function nomesemquot(nome) {
    return nome.replace(/\\?\"/g, '');
}

//função para adicionar um novo filme ao estoque
function adicionarProduto() {
    //solicita ao usuário o nome do filme a ser adicionado
    let nome = prompt("Digite o nome do Filme que você vai adicionar ao estoque");
    //solicita ao usuário a quantidade de filmes a serem adicionados
    let quantidade = parseInt(prompt("Digite a quantidade de filmes que serão adicionados ao estoque"));
    //solicita ao usuário o periodo de aluguel do filme no estoque
    let validade = prompt("Digite o periodo de aluguel do filme no estoque");

    //um novo objeto para representar o filme
    let novoProduto = {
        nome: nome, //nome do filme
        quantidade: quantidade, //quantidade de filmes
        validade: validade, //periodo de aluguel
    };

    //adiciona o novo filme ao estoque
    estoque.push(novoProduto);
    //chama a função para adicionar nota ao filme
    adicionarnota(nome); //fiquei quase 3h pra descobrir que tava chamando a função
}

//função para consultar o tempo de aluguel de um filme especifico
function validadeIndividual() {
    //solicita ao usuario o nome do filme para consultar seu tempo de aluguel
    let nome = prompt("Digite o nome do Filme para consultar seu tempo de aluguel:");
    //procura o filme no estoque pelo nome fornecido
    let produto = estoque.find(item => item.nome === nome); //valor e tipo
    //se o filme for encontrado, exibe seu periodo de aluguel SE NÃO informa que não possui o mesmo no estoque
    if (produto) {
        console.log(`A validade do Filme ${nomesemquot(produto.nome)} alugado é ${produto.validade}`);
    } else {
        console.log("Filme não encontrado no estoque")
    }
}

//função para imprimir um relatorio de validades de todos os filmes no estoque
function imprimirRelatorioValidades() {
    console.log("Relatório de Validades:");
    console.log("Quantidade de produtos no estoque:", estoque.length);
    if (estoque.length === 0) {
        console.log("O estoque está vazio.");
        return;
    }

    //itera(repete) sobre cada produto no estoque e imprime o nome e a validade de cada um
    estoque.forEach(produto => {
        console.log(`Nome do Filme: ${produto.nome}, Validade: ${produto.validade}`);
    });
}

//função para remover um filme do estoque
function removerProduto() {
    //solicita ao usuário o nome do filme que deseja remover
    let nome = prompt("Digite o nome do Filme que deseja remover:");
    //encontra o indice do filme no estoque
    let index = estoque.findIndex(produto => produto.nome === nome)
    //se o filme for encontrado vai de arrasta SE NÃO avisa que não tem o mesmo no estoque
    if (index !== -1) {  //dif valor e tipo
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
       
        console.log(`Quantidade do produto ${nomesemquot(produto.nome)} atualizada para ${quantidade}`)
    } else {
        console.log("Seu Filme não foi encontrado no estoque")
    }
}
function adicionarnota(nomeFilme) {
    let nota = parseInt(prompt("Forneça uma nota de 1 a 5 para o filme:"));
    if (nota >= 1 && nota <= 5) {
        console.log(`O filme ${nomeFilme} foi adicionado com a nota ${nota} com sucesso.`);
    } else {
        console.log("Por favor, forneça uma nota válida de 1 a 5.");
    }
}



function cadastrarFornecedor() {
    let nomeDaEmpresa = prompt('Nome: ') //aqui você adiciona o nome da empresa
    let cnpj = parseInt(prompt('CNPJ: ')) //aqui você adiciona o cnpj da empresa
    let email = prompt('Email: ') // aqui você adiciona o email da empresa
    let telefone = parseInt(prompt('Telefone: ')) //aqui você adiciona o telefone da empresa
    let produtos = []; //array para armazenar os produtos do fornecedor
    let fornecedor = { nomeDaEmpresa, cnpj, email, telefone, produtos }; //objeto para armazenar os dados do fornecedor
    fornecedores.push(fornecedor); //adiciona o novo fornecedor a lista
       //Aqui vocês implementam o código referente a função 
}

function listarFornecedores() { //função para listar todos os fornecedores
    console.log(`Lista de Fornecedores:`) //exibe o cabeçalho da lista
    for (let i = 0; i < 3; i++) //itera sobre a lista de fornecedor
    console.log(`Nome: ${nomeDaEmpresa[i]}, ${cnpj[i]}, ${email[i]}, ${telefone[i]}`) //exibe os dados do fornecedor atual


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

console.log('******+++*******');
console.log('Sistema de controle de estoque');
console.log('******+++*******');

/* 01 - Processo de cadastro de 6 usuários */

alert('Cadastre seu usuário') //O usuário tem que saber o que está fazendo, não é?

console.log('Usuários cadastrados: ')

for (let i = 0; i < 3; i++) {
    cadastrarUsuarios();
}

/* 02 - Listar todos usuários cadastrados, com todas informações */
listarUsuarios();

/* 03 - Remover 1 dos usuários, qualquer um deles e depois listar novamente eles
        para ver se o usuário foi removido. */
alert('Apagador de usuários')
removerUsuario();
console.log('Atual lista de usuários:')
listarUsuarios();

/* 04 - Alterar algum dado do usuário */
alert('Editor de Usuário')
alterarDadoUsuario();
console.log('Atual lista de usuários:')
listarUsuarios()

/* 05 - Fazer login com um dos usuários cadastrados */
alert('Login')
logarUsuario();

// /* 06 - Cadastrar pelo menos 15 produtos */
adicionarProduto();

// /* 07 - Consultar validade individualmente de um produto */
validadeIndividual();

// /* 08 - Consultar validade de todos os produtos em formato relatório */
imprimirRelatorioValidades();

// /* 09 - Remover pelo menos 5 produtos */
removerProduto();

// /* 10 - Atualizar a quantidade de pelo menos 5 produtos */
atualizarQuantidade();

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
