
function isPrime(n) {
  if (typeof n !== "number" || !Number.isFinite(n)) return false;
  n = Math.trunc(n);             
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}


console.log(isPrime(2));    
console.log(isPrime(17));  
console.log(isPrime(18));  
console.log(isPrime(1));   
console.log(isPrime(1.9));  
