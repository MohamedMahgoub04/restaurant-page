import { pageLoad } from './page-load'
import { menuLoader } from './menu-loader'
import { contactLoader } from './contact-loader'
document.addEventListener('DOMContentLoaded', () => {
 

 pageLoad()
 // menuLoader()
 // contactLoader()




 const content = document.querySelector('#content')
 const homeBtn = document.querySelector('#Home')
 const menuBtn = document.querySelector('#Menu')
 const contactBtn = document.querySelector('#Contact')

 homeBtn.onclick = () => {
  content.innerHTML = ''
  pageLoad()
  // const home = document.querySelector('#main')
  // const menu = document.querySelector('#main1')
  // const contact = document.querySelector('#main2')
  // home.style.display = 'flex'
  // menu.style.display = 'none'
  // contact.style.display = 'none'
 }
 menuBtn.onclick = () => {
  content.innerHTML = ''
  menuLoader()
  // const home = document.querySelector('#main')
  // const menu = document.querySelector('#main1')
  // const contact = document.querySelector('#main2')
  // home.style.display = 'none'
  // menu.style.display = 'flex'
  // contact.style.display = 'none'
 }
 contactBtn.onclick = () => {
  content.innerHTML = ''
  contactLoader()
  // const home = document.querySelector('#main')
  // const menu = document.querySelector('#main1')
  // const contact = document.querySelector('#main2')
  // home.style.display = 'none'
  // menu.style.display = 'none'
  // contact.style.display = 'flex'
 }

})