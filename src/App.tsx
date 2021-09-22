import { Dashboard } from './components/Dashboard';
import { useState } from 'react'
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import {  TransactionsProvider } from './hooks/useTransactions';



export function App() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleModalOpen(){
    setIsTransactionModalOpen(true)
  }
  
  function handleModalClose(){
    setIsTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider >
     <Header onTransactionModal={handleModalOpen} />
     <Dashboard />
     <NewTransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleModalClose} />
     <GlobalStyle />
    </TransactionsProvider>
  );
}


