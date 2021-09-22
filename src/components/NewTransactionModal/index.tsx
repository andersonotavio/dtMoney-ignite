import Modal from 'react-modal';
import { useState, FormEvent,  } from 'react'
import { useTransactions } from '../../hooks/useTransactions';


import { api } from '../../services/api';

import imgClose from '../../assets/close.svg';
import inCome from '../../assets/income.svg';
import outCome from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles' ;


Modal.setAppElement('#root')

interface ModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: ModalProps){
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType ] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
    
    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  
  }

  return (

    <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={imgClose} alt="Botão fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>
          
          <input 
            placeholder="Titulo"
            value={title}
            onChange={(event) => setTitle(event.target.value)} 
          />

          <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))} 
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={inCome} alt="Entrada" />
              <span>Entradas</span>
            </RadioBox>

            <RadioBox 
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outCome} alt="Saida" />
              <span>Saídas</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria" 
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
    </Modal>
  )
}