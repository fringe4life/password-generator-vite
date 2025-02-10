import { form,  length, checkboxes, passwordEls } from './elements.ts'

import { generatePassword } from './elementFunctions.ts'

/**
 * Add event listener to the form to generate and display a password when the user submits their preferences.
 */
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const checkboxValues = Array.from(checkboxes).map((checkbox) => checkbox.checked);
  // this is the order of the checkboxes: lowercase, uppercase, numbers, symbols
  
  const passwordLength = Number.parseInt(length.value);

  // Generate a random password
  for (const passwordEl of passwordEls) {
    passwordEl.textContent = generatePassword(passwordLength, checkboxValues );
  }
})

/**
 * keeps track of the range input to show user how long 
 * the password will be when the user changes the length.
 */
length.addEventListener("change", (_) => {
  makePopover<HTMLDivElement>("popover", `Password length: ${length.value} characters` )
})

/**
 * @abstract makes a popover with the given content
 * @param element the id of the popover element
 * @param content the content to display in the popover
 */
const makePopover = <T extends HTMLElement>(element: string, content: string) => {
  const popover = document.getElementById(element) as T;
  popover.textContent = content;
  popover.showPopover()
  setTimeout(() => popover.hidePopover(), 1000)
}

/**
 * adds a click event listener to each password element to copy it to the clipboard
 */
for(const passwordEl of passwordEls) {
  passwordEl.addEventListener("click", () => {
    // copy password to clipboard
    if (!passwordEl?.textContent) {
      return
		}
    navigator.clipboard.writeText(passwordEl?.textContent)
    makePopover<HTMLDivElement>("popover", "Password copied to clipboard!")
  })
}
