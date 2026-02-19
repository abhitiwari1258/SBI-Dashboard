// creating object for user info
// we create a function inside an object, it is not called method

 // here creating method to get customer details
  // use return keyword or use () to return the object

import helper from "../utils/helper";
const bankingService = {
 
  getCustomerDetail:()=>{
    return {
        name : "Abhishek",
        accountNumber : "46564",
        branch : "Ghaziabad",
        hasDeposit:true,
        hasLoan:true,
        hasCreditCard:true
    }
  },

  fetchInterestRates: async ()=>{
    helper.logEvent("Fetching interest rates...");
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
          deposit: 3.5,
          loan: 9.0,
          credit: 14.5
        });
      },1000);
    })
  },
};

export default bankingService;