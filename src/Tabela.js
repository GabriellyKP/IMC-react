import { TableBody, TableCell, TableContainer, TableHead, Table, TableRow } from '@material-ui/core'
import React from 'react'

export default function Tabela(props) {

    const { visualizarDados } = props

    return (
        <div>
             <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Idade</TableCell>
                <TableCell>Altura</TableCell>
                <TableCell>Peso</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Resultado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                visualizarDados?.map(info => {

                  return (
                    <TableRow>
                      <TableCell>{info.nome}</TableCell>
                      <TableCell>{info.idade}</TableCell>
                      <TableCell>{info.altura}</TableCell>
                      <TableCell>{info.peso}</TableCell>
                      <TableCell>{info.imc}</TableCell>
                      <TableCell>{info.tabela}</TableCell>
                    </TableRow>
                  )
                })
              }

            </TableBody>
          </Table>
        </TableContainer>
        </div>
    )
}
