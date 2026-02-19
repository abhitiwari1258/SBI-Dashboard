export function logEvent(message) {
    console.log(`[SBI Log]: ${message}`);
}

// using the JavaScript Internationalization API: Intl.NumberFormat
export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

const helper = {
    logEvent,
    formatCurrency
}

export default helper;
