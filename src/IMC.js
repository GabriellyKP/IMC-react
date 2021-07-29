import { Box, Button, Paper, TextField} from '@material-ui/core'
import React, {useState} from 'react'
import Tabela from './Tabela'


export default function IMC() {

  let novaPessoa = {
    nome: "",
    idade: "",
    altura: 0.0,
    peso: 0.0,
    imc: 0.0,
    tabela: ""
  }

  const [Pessoa, setPessoa] = useState(novaPessoa)
  var valorIMC = 0
  var resultTabela = ""
  const [Armazenamento, setArmazenamento] = useState([])

  const AlterarAltura = (event) => {
    let valorAltura = event.target.value
    setPessoa({...Pessoa, altura: valorAltura })
  }

  const AlterarPeso = (event) => {
    let valorPeso = event.target.value
    setPessoa({...Pessoa, peso: valorPeso})

  }

  const AlterarNome = (event) => {
    let valorNome = event.target.value
    setPessoa({...Pessoa, nome: valorNome })

  }

  const AlterarIdade = (event) => {
    let valorIdade = event.target.value
    setPessoa({...Pessoa, idade: valorIdade })

  }

  const conta = () => {
    let calcIMC = Pessoa?.peso / (Pessoa?.altura * Pessoa?.altura)
    setPessoa({...Pessoa, imc: calcIMC.toFixed(2)});
    valorIMC = calcIMC.toFixed(2);

    tabelaIMC()
  }

  const tabelaIMC = () => {
    let mensagem

    if (valorIMC < 18.5) {
      mensagem = "Você está abaixo do peso"
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
      mensagem = "Você está com o peso normal"
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
      mensagem = "Você está com sobrepeso"
    } else if (valorIMC >= 30 && valorIMC <= 39.9) {
      mensagem = "Você está com obesidade"
    } else if (valorIMC > 40) {
      mensagem = "Você está com obesidade severa"
    }

    resultTabela = mensagem;

    verDados();
  }

  const verDados = () => {
    var pessoa = {
      nome: Pessoa.nome,
      idade: Pessoa.idade,
      altura: Pessoa.altura,
      peso: Pessoa.peso,
      imc: valorIMC, 
      tabela: resultTabela,
    }

    Armazenamento.push(pessoa)
    setArmazenamento(Armazenamento)
    console.log(Armazenamento)

  }

  const LimparDados = () => {
    setPessoa(novaPessoa)
    setArmazenamento([])
   
  }

  return (
    <div>
      
      <Box fontSize={30} 
      textAlign="center"  
      bgcolor= "#CDCACA" 
      color="text.primary" 
      fontFamily="Monospace"
      >
        Calculadora IMC 
      </Box>
     
      <Box display='flex' justifyContent="center" flexDirection='column' alignItems="center">

        <TextField 
        label='Digite seu nome' 
        value={Pessoa?.nome} 
        onChange={event => AlterarNome(event)} 
        type='text' 
        size='medium'/> <br />

        <TextField 
        label='Digite sua idade' 
        value={Pessoa?.idade} 
        onChange={event => AlterarIdade(event)} 
        type='number' /> <br />

        <TextField 
        label='Digite sua altura' 
        value={Pessoa?.altura} 
        onChange={event => AlterarAltura(event)} 
        type='number' /> <br />

        <TextField 
        label='Digite seu peso' 
        value={Pessoa?.peso} 
        onChange={event => AlterarPeso(event)} 
        type='number' />
        <br />

      </Box>
      
      <br/>

      <Box display='flex' justifyContent="center" alignItems="space-between">
      <Button variant="contained" color="primary" onClick={conta}>Calcular</Button>
      <Button variant="contained" color="secondary" onClick={LimparDados}>Limpar</Button>
      </Box>
      

      <Box p={2} 
      display='flex' 
      flexDirection='column' 
      justifyContent="center" 
      bgcolor= "#CDCACA">
        <Paper >
       <Tabela visualizarDados={Armazenamento}/>
        </Paper>
      </Box>

    </div>
  )
}
