const contactLoader = () => {
 const content = document.querySelector('#content')

 const main = document.createElement('div')
 const heading = document.createElement('h1')

 const contactList = [
  {name: 'Ben Parker', src: 'ben-parker-OhKElOkQ3RE-unsplash-modified(1).jpg', position: 'Manager'},
  {name: 'Sergio Jesus', src: 'sergio-de-paula-c_GmwfHBDzk-unsplash(1).jpg', position: 'Chef'},
  {name: 'Dani Ricardo', src: 'dani-SzHsiYO6pZE-unsplash(1)(1).jpg', position: 'Waiter'}
 ]
 const team = document.createElement('div')

 // Generate Main Section
 main.setAttribute('id', 'main2')
 heading.innerHTML = 'Contact Us'
 for (let person of contactList){
  const personDiv = document.createElement('div')
  const img = document.createElement('img')
  const div = document.createElement('div')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  personDiv.setAttribute('class', 'person')
  img.setAttribute('src', person.src)
  
  h3.innerHTML = person.name
  p.innerHTML = `${person.position} <br>
       555-555-5555 <br>
       perfectlyRealEmail@notFake.com`
  
  div.setAttribute('class', 'person-details')

  div.append(h3)
  div.append(p)
  personDiv.append(img)
  personDiv.append(div)
  team.append(personDiv)
 }

 team.setAttribute('id', 'team')
 main.append(heading)
 main.append(team)
 content.append(main)

}

export { contactLoader }