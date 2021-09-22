import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';


import imgSignIn from "../../assets/income.svg";
import imgSignOut from "../../assets/outcome.svg";
import imgTotal from "../../assets/total.svg";


export function Summary(){

  const{ transactions } = useTransactions()
  console.log(transactions)

  const sumary = transactions.reduce((acc, transaction) =>{
    if(transaction.type === 'deposit'){
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    }else{
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, {
    deposit: 0,
    withdraws: 0,
    total: 0,
  })

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgSignIn} alt="entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(sumary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={imgSignOut} alt="saidas" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(sumary.withdraws)}</strong>
      </div>
      <div className="highLight-background">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(sumary.total)}</strong>
      </div>
    </Container>
  )
}