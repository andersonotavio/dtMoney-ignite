import { Container } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'


export function TransactionsTable(){
  
  interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
  }

  const [transaction, setTransaction] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransaction(response.data.transactions))
  }, [])

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
          {transaction.map((item) => (
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