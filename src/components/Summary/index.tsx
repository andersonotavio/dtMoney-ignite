import { Container } from "./styles";
import imgSignIn from "../../assets/income.svg";
import imgSignOut from "../../assets/outcome.svg";
import imgTotal from "../../assets/total.svg";


export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={imgSignIn} alt="entradas" />
        </header>
        <strong>R$ 5000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={imgSignOut} alt="saidas" />
        </header>
        <strong>- R$ 2000</strong>
      </div>
      <div className="highLight-background">
        <header>
          <p>Total</p>
          <img src={imgTotal} alt="Total" />
        </header>
        <strong>R$ 3000</strong>
      </div>
    </Container>
  )
}