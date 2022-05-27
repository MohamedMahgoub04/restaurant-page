const menuLoader = () => {
 const content = document.querySelector('#content')

 const main1 = document.createElement('div')
 const heading = document.createElement('h1')

 const itemList = [
  {name: 'Big Tasty', src: 'big-tasty.jpg', description: "A big and tasty Halal beef patty smothered in our one of a kind Big Tasty Sauce and 3 slices of emmental cheese, dressed with 2 slices of tomato, a handful of crispy shredded lettuce and slivered onions."},

  {name: 'Quarter Pounder', src: 'quarter-pounder.jpg', description: "A quarter pound* of 100% pure halal beef with absolutely no fillers, additives or preservatives. Just a pinch of salt and pepper, and seared on our grill so it’s thick and juicy. Layered with two slices of melty cheese, slivered onions and tangy pickles on a sesame seed bun. *Weight before cooking at least 110 g."},

  {name: 'Double Cheeseburger', src: 'double-cheeseburger.jpg', description: "Two 100% pure halal beef patties with absolutely no fillers, additives or preservatives, seasoned with a pinch of salt and pepper, and topped with tangy pickles, chopped onions, ketchup, mustard and two slices of melty American cheese."},

  {name: 'Beef Burger', src: 'beef-burger.jpg', description: "A juicy, 100% pure halal beef patty with absolutely no fillers, additives or preservatives, seasoned with a pinch of salt and pepper, and topped with a tangy pickle, chopped onions, ketchup and mustard."},

  {name: 'Smoky BBQ', src: 'smoky-bbq.jpg', description: "Juicy 100% halal beef topped with crispy chicken strips, crispy onion, fresh Boston lettuce, melty Emmental cheese, and a smoky barbeque sauce, all nestled in a double water split artisan bun."}
 ]
 const items = document.createElement('div')

 // Generate Main Section
 main1.setAttribute('id', 'main1')
 heading.innerHTML = 'Menu'
 for (let item of itemList){
  const div = document.createElement('div')
  const h3 = document.createElement('h3')
  const img = document.createElement('img')
  const p = document.createElement('p')

  h3.innerHTML = item.name
  img.setAttribute('src', item.src)
  p.innerHTML = item.description

  div.setAttribute('class', 'item')
  div.append(h3)
  div.append(img)
  div.append(p)
  items.setAttribute('id', 'items')
  items.append(div)
 }
 
 main1.append(heading)
 main1.append(items)
 content.append(main1)

}

export { menuLoader }