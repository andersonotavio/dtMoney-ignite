import { Container } from './styles'
import { useContext } from 'react'
import { useTransactions } from '../../hooks/useTransactions';



export function TransactionsTable(){
  
  
  const { transactions } = useTransactions()

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
            <td>{item.title}</td>
            <td className={item.type}>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(item.amount)}</td>
            <td>{item.category}</td>
            <td>{new Intl.DateTimeFormat('pt-BR').format(
              new Date(item.createdAt)
            )}</td>
          </tr>
          ))}
          
       
        </tbody>
      </table>
    </Container>
  )
}