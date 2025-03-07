
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
    const exchangeRateApi = `https://apilayer.net/api/live?access_key=${apiKey}&currencies=${'NGN'}&source=${"USD"}`;
  
    try {
        const response = await fetch(exchangeRateApi);
        if (!response.ok) {
          throw new Error(`Error fetching exchange rate: ${response.statusText}`);
        }
    
        const data = await response.json();
        
    
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



















