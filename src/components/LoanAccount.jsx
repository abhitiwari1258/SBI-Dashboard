import React, { useState } from 'react'
import helper from '../utils/helper'
const LoanAccount = () => {
    const [loanAmount,updateLoanAmounts] = useState(1000000)
    const [emispaid,updateEmisPaid] = useState(12)
  return (
    <div className="account-card">
      <h3>💸 Loan Account</h3>
      <p>Outstanding Loan: {helper.formatCurrency(loanAmount)}</p>
      <p>EMIs paid: {emispaid}</p>

      <div className="actions">
        <button onClick={()=>{
            updateLoanAmounts(loanAmount-10000);
            updateEmisPaid(emispaid + 1)
        }}>Pay EMI ₹10000</button>
      </div>
    </div>
  )
}

export default LoanAccount
