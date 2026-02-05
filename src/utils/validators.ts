// Email Validation
export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Password Validation
export function isValidPassword(password: string): boolean {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
}

// Ethereum Address Validation
export function isValidEthereumAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

// Bitcoin Address Validation
export function isValidBitcoinAddress(address: string): boolean {
  return /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address)
}

// Amount Validation
export function isValidAmount(amount: unknown): boolean {
  if (typeof amount !== 'number') return false
  return amount > 0 && isFinite(amount)
}
