import { useState } from 'react'
import SBIDashboard from './components/SBIDashboard'
import './App.css'
import DepositAccount from './components/DepositAccount'
import LoanAccount from './components/LoanAccount'
import CreditCardAccount from './components/CreditCardAccount'
function App() {

  return (
    <>
      <SBIDashboard/>
      <DepositAccount/>
      <LoanAccount/>
      <CreditCardAccount/>
    </>
  )
}

export default App
