import logoImg from '../../assets/logo.svg';
import { Container, Contant } from './styles';


interface HeaderProps{
  onTransactionModal: () => void;
}


export const Header = ({ onTransactionModal }: HeaderProps) =>{

  

  return(
    <Container>
      <Contant>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onTransactionModal}>
          Nova Transação
        </button>
      </Contant>
    </Container>
  )
}