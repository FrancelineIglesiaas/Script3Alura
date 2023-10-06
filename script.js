function coletaDados() {
  const dataNasc = coletaDataNasc()
  const cpf = coletaCPF()
  const nomeCliente = coletaNomeCliente()
  const email = coletaEmail()
  const numerosContato = coletaNumerosContato()
  const endereco = coletaEndereco()
  const cidade = coletaCidade()
  const profissao = coletaProfissao()
  const salario = coletaSalario()
  const senha = coletaSenha()

  const CLIENTE = {
    dataNasc: dataNasc,
    cpf: cpf,
    nomeCliente: nomeCliente,
    email: email,
    numerosContato: numerosContato,
    endereco: endereco,
    cidade: cidade,
    profissao: profissao,
    salario: salario,
    senha: senha
  }
  alert(`
  'Confirme os seus dados'
    Nome Completo ${CLIENTE.nomeCliente.toUpperCase()}
    CPF: ${CLIENTE.cpf}
    Data de Nascimento ${CLIENTE.dataNasc.dataNasc}
    Idade: ${CLIENTE.dataNasc.idade}
    
    E-mail:${CLIENTE.email.toUpperCase()}
    Celular:${CLIENTE.numerosContato.celular}
    Contato: ${CLIENTE.numerosContato.telefone}
 
    Endereço:${CLIENTE.endereco.toUpperCase()}
    Cidade/UF:${CLIENTE.cidade.toUpperCase()}
  
    Profissão:${CLIENTE.profissao.toUpperCase()}
    Salario:${CLIENTE.salario}
    
    Senha cadastrada: ${senha}
`)
  let credito
  if (CLIENTE.salario >= 1000 && CLIENTE.salario < 3000) {
    credito = CLIENTE.salario * .20
  } else if (CLIENTE.salario >= 3000 && CLIENTE.salario < 5000) {
    credito = CLIENTE.salario * .28
  } else if (CLIENTE.salario >= 5000) {
    credito = CLIENTE.salario * .31
  }

  prompt(`Você tem direito a um credito de ${credito}`)
  alert('Desejamos boas vindas')
  //console.log(CLIENTE)
}

coletaDados()

function coletaDataNasc() {
  const dataNasc = prompt('Qual a sua data de nascimento? (DD/MM/AAAA)')
  const idade = verificaDataNasc(dataNasc)

  return {
    dataNasc,
    idade
  }
}

function verificaDataNasc(dataNasc) {
  const particaoData = dataNasc.split('/')
  const diaNasc = parseInt(particaoData[0])
  const mesNasc = parseInt(particaoData[1])
  const anoNasc = parseInt(particaoData[2])

  const dataNascObj = new Date(anoNasc, mesNasc - 1, diaNasc)
  const dataAtual = new Date()

  const idadeEmMiliseg = dataAtual - dataNascObj
  // 1000ms -> 1s - 60s -> 1min    --- arredondamento por causa de anos bissextos
  const idadeEmAnos = Math.floor(idadeEmMiliseg / (1000 * 60 * 60 * 24 * 365.2425))

  if (idadeEmAnos >= 18) {
    alert('Verificamos aqui e você pode abrir a sua conta conosco!')
  } else {
    alert(`Ops! Você ainda não tem a idade mínima para abrir uma conta conosco. Daqui ${18 - idadeEmAnos} anos você poderá tentar novamente!`)
  }

  return idadeEmAnos
}

function coletaCPF() {
  let cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')

  //        false
  while (!verificaCPF(cpf)) {
    cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')
  }

  return cpf
}

function verificaCPF(cpf) {
  const cpfLimpo = cpf.split(/[.-]/).join('')
  if (cpfLimpo.length === 11) {
    alert('Tudo certo! Vamos prosseguir.')
    return true
  }

  alert('Verificamos aqui e seu CPF parece ser um número inválido. Tente novamente.')
  return false

}

function coletaNomeCliente() {
  const nomeCliente = prompt('Digite o seu nome completo:')

  return nomeCliente
}

function coletaEmail() {
  let email = prompt('Agora nos diga qual é o seu melhor email:')

  while (!verificaEmail(email)) {
    email = prompt('Agora nos diga qual é o seu melhor email:')
  }

  return email
}

function verificaEmail(email) {
  const emailValido = email.indexOf('@')
  if (emailValido === -1) {
    alert('Ops! Tem certeza que esse e-mail está correto? Tente novamente.')
    return false
  }

  return true
}

function coletaNumerosContato() {
  let celular = prompt('Digite um número de celular válido: ') // => ''
  while (celular === '') {
    celular = prompt('Digite um número de celular válido: ')
  }

  let telefone = prompt('Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir.')
  if (telefone === '') {
    telefone = 'Não informado'
  }

  return {
    celular: celular,
    telefone: telefone
  }
}

function coletaEndereco() {
  const endereco = prompt('Qual o seu endereço? (R. das Flores, 195, Bairro Tristeza)')

  return endereco
}

function coletaCidade() {
  const cidade = prompt('Qual cidade e estado você mora? (Porto Alegre - RS)')

  return cidade
}

function coletaProfissao() {
  const profissao = prompt('Conta para nós, qual é a sua profissão?')

  return profissao
}

function coletaSalario() {
  const salario = prompt('E qual a sua renda mensal aproximada?')

  return salario
}

function coletaSenha() {
  let senha = prompt('Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):')
  while (!verificarSenha(senha)) { //negar ocorrecia//
    senha = prompt('Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):')
  }
  return senha
}
function verificarSenha(senha) {
  // verifica se a senha tem 4 caracteres//
  if (senha.length !== 4) {
    alert('A senha possui tamanho errado')
    return false //se dar falso é verdadeira
  }
  //verifica se os caracteres sao numericos//
  if (!/^\d+$/.test(senha)) { //saber se tem caracteres especiais
    alert('A senha contem caracteres não numericos')
    return false
  }
  //verifica se os numeros nao se repetem// indice
  for (let a = 0; a < senha.lenght; a++) {
    // posição char da senha
    for (let b = 0; b < senha.lenght; b++) { //fazer comparacao caracteres iguais//
      if (senha[a] === senha[b] && a !== b) {
        alert(' senha contem caracteres iguais')
        return false
      }
    }
  }
  //verifica se a senha forma um sequencia cres ou decres//
  for (let a = 0; a < senha.lenght; a++) {
    // numero atual + 1 nao pode ser igua ao prox numero
    if (Number(senha[a]) + 1 === Number(senha[a + 1] || Number[a]) - 1 == Number(senha[a + 1])) {
      alert('A senha contem uma sequencia')
      return false
    }
  }
  return true
}
