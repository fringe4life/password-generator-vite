
import { lowercase, uppercase, numbers, symbols } from "./data.ts"



// Generate a random password
function generatePassword(passwordLength:number, includes: boolean[]):string {
  const characters = []
  const [ includeUppercase, includeLowercase, includeNumbers, includeSymbols] = includes
  if (includeLowercase) characters.push(...lowercase)
  if (includeUppercase) characters.push(...uppercase)
  if (includeSymbols) characters.push(...symbols)
  if (includeNumbers) characters.push(...numbers)

  if (!characters.length) {
    alert('Please choose something')
    return ''
  }  // No characters selected, return an empty password

  const password = []

  for (let i = 0; i < passwordLength; i++) {
    password.push(characters[Math.floor(Math.random() * characters.length)])
  }


  return password.join('')
}

export { generatePassword }