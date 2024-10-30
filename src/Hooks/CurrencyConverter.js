// import { useState } from "react";

// const CurrencyConverter = () => {
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [error, setError] = useState(null);

//   const convertCurrency = async (amount, toCurrency) => {
//     console.log(typeof toCurrency);

//     const apiKey = "2725d88ff3cf099d175bbf085543dc87";
//     const exchangeRateApi = `http://apilayer.net/api/live?access_key=${apiKey}&currencies=${toCurrency}&source=${"USD"}`;
//     try {
//       const response = await fetch(exchangeRateApi);
//       const data = await response.json();
//       const exchangeRate = data.rates[toCurrency];

//       if (!exchangeRate) {
//         throw new Error(`Unable to get the exchange rate for ${toCurrency}`);
//       }

//       const calculatedAmount = amount * exchangeRate;
//       setConvertedAmount(calculatedAmount);
//     } catch (err) {
//       setError(err.message);
//       console.error(`Error fetching exchange rate: ${err.message}`);
//     }
//   };

//   return { convertedAmount, error, convertCurrency };
// };

// export default CurrencyConverter;

// // import React, { useState } from 'react';
// // import useCurrencyConverter from './useCurrencyConverter';

// // const CurrencyConverter = () => {
// //   const [amount, setAmount] = useState(100);
// //   const { convertedAmount, error, convertCurrency } = useCurrencyConverter();

// //   const handleConvert = () => {
// //     convertCurrency(amount, 'USD', 'NGN');
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="number"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //         placeholder="Amount"
// //       />
// //       <button onClick={handleConvert}>Convert Currency</button>

// //       {convertedAmount && (
// //         <p>Converted Amount: {convertedAmount.toFixed(2)} NGN</p>
// //       )}
// //       {error && <p>Error: {error}</p>}
// //     </div>
// //   );
// // };

// // export default CurrencyConverter;





import { useState } from 'react';

const useCurrencyConverter = () => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);


  const convertCurrency = async (amount, toCurrency) => {
    if (isNaN(amount) || amount <= 0) {
      setError('Invalid amount. Please enter a positive number.');
      return;
    }
  
    const apiKey = "2725d88ff3cf099d175bbf085543dc87"; // Use environment variable
    const exchangeRateApi = `http://apilayer.net/api/live?access_key=${apiKey}&currencies=${toCurrency}&source=${"USD"}`;
  
    try {
        const response = await fetch(exchangeRateApi);
        if (!response.ok) {
          throw new Error(`Error fetching exchange rate: ${response.statusText}`);
        }
    
        const data = await response.json();
        console.log(data); // Log the entire response to inspect it
        console.log(data.quotes); // Log the quotes object
    
        // Construct the key for the quotes object
        const exchangeRateKey = `${"USD"}${toCurrency}`;
        
        // Check if the quotes object is defined and has the desired currency
        if (!data.quotes || !data.quotes[exchangeRateKey]) {
          throw new Error(`Unable to get the exchange rate for ${exchangeRateKey}`);
        }
    
        const exchangeRate = data.quotes[exchangeRateKey];
        const calculatedAmount = amount * exchangeRate;
        setConvertedAmount(calculatedAmount);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
        console.error(`Error fetching exchange rate: ${err.message}`);
      }
    };
  
  return { convertedAmount, error, convertCurrency };
};

export default useCurrencyConverter;



















