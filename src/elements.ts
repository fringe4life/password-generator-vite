/**
 * the form element where the user submits their password preferences
 */
const form = document.getElementsByTagName('form')[0]

/**
 * the passwords displayed to the user
 */
const passwordEls = document.getElementsByClassName('password')

const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>
const length = document.getElementById('length')  as HTMLInputElement


export { form, checkboxes, length, passwordEls }