import { homepageLoader } from './page-load'
import { menuLoader } from './menu-loader'
import { contactLoader } from './contact-loader'
document.addEventListener('DOMContentLoaded', () => {
 
 homepageLoader()
 
 const content = document.querySelector('#content')
 const homeBtn = document.querySelector('#Home')
 const menuBtn = document.querySelector('#Menu')
 const contactBtn = document.querySelector('#Contact')

 homeBtn.onclick = () => {
  content.innerHTML = ''
  homepageLoader()
 }
 menuBtn.onclick = () => {
  content.innerHTML = ''
  menuLoader()
 }
 contactBtn.onclick = () => {
  content.innerHTML = ''
  contactLoader()
 }

})