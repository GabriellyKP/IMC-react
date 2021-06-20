import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'


export default function App() {


//variáveis de nome e idade
//use state (valor inicial)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

//function para alterar o valor do nome, ligado a um evento, modificando o value
  const AlterarNome = (event) => {
    let valorNome = event.target.value
    setNome(valorNome)
  }

//function para alterar o valor da idade, ligado a um evento, modificando o value
  const AlterarIdade = (event) => {
    let valorIdade = event.target.value
    setIdade(valorIdade)
  }

//function para limpar dados, limpando os valores do nome e da idade 
  const LimparDados = () => {

    setNome('')
    setIdade('')

  }

  return (
    <div>
      {/* Box com atributos de Flexbox, onde a column torna a box lida como uma coluna, o flex-start alinha os componentes para a direita, e o maxWidth ela configura um tamanho para os componentes da box */}
        <Box display="flex" flexDirection='column' justifyContent="flex-start" maxWidth='50vw'>

      {/* Os TextField são os campos onde o usuário insere os dados de nome e idade,  */}
        <TextField label='Digite seu nome' value={nome} onChange={event => AlterarNome(event)} />
        <TextField label='Digite sua idade' value={idade} onChange={event => AlterarIdade(event)} type='number' />
        
        {/* Chama a função limpar dados quando o botão for clicado */}
        <Button onClick={LimparDados}>
          Limpar
        </Button>
      </Box>

{/* Printar o nome e a idade na tela */}
  {nome}
  {idade}

    </div>
  )
}

