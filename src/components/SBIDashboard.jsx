import { useEffect, useState } from "react";
import bankingService from "../services/BankingService";
import DepositAccount from "./DepositAccount";
import LoanAccount from "./LoanAccount";
import CreditCardAccount from "./CreditCardAccount";
const SBIDashboard = () => {
  const [customer, setCustomer] = useState({});
  const [rates,setRates] = useState({})
  const [searchTerm,setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState("all");

//   console.log(customer);
// //   console.log(rates);
//     console.log(searchTerm);
//     console.log(filterType);

  useEffect(() => {
    const customerDetail = bankingService.getCustomerDetail();
    setCustomer(customerDetail);

    bankingService.fetchInterestRates().then((data)=>setRates(data))

  }, []);

  const accounts = [
    {name:"Deposit", show: customer.hasDeposit, component: <DepositAccount/> },
    {name:"Loan", show: customer.hasLoan, component: <LoanAccount/> },
    {name:"Credit Card", show: customer.hasCreditCard, component: <CreditCardAccount/> }
  ]

  const filteredAccounts = accounts.filter((item)=>{
    const matchType = filterType === "all" || item.name.toLowerCase().includes(filterType.toLowerCase());
    // console.log(matchType);
    

    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    // console.log(matchSearch);
    return item.show && matchType && matchSearch
  })

  console.log(filteredAccounts.length);
  
  return (
    <div>
      <div className="dashboard-header">SBI Banking Dashboard</div>

      <div className="dashboard-container">

        <div className="customer-info">
          <p>
            <strong>Customer:</strong>
            {customer.name}
          </p>
          <p>
            <strong>Account Number:</strong> {customer.accountNumber}
          </p>
          <p>
            <strong>Branch:</strong> {customer.branch}
          </p>
          <hr style={{ margin: "1rem 0" }} />

          {rates.deposit && (
            <p><strong>Interest Rates:</strong> Deposit {rates.deposit}% | Loan {rates.loan}% | Credit {rates.credit}%</p>
          )}

        </div>

        <div className="filter-bar">
            <input 
            type="text" 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search account type..."

              />
            
            <select value={filterType} onChange={(e)=>setFilterType(e.target.value)}>
                <option value="all">All Accounts</option>
                <option value="deposit">Deposit</option>
                <option value="loan">Loan</option>
                <option value="credit">Credit Card</option>
            </select>
        </div>

        <div className="cards-grid">
            {filteredAccounts.length > 0
            ?
            (filteredAccounts.map((acc,idx)=>{
                return(
                    <div key={idx}>{acc.component}</div>
                )
            }))
            :
            (<p className="no-results">No accounts match your search.</p>)
            }
        </div>

      </div>
    </div>
  );
};

export default SBIDashboard;
